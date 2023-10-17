# Building Nebula - Chapter 2

> Let's see some proper code

![Rust + Wasm/Wasi](/blog-assets/rust_wasi.jpg)

```rust
#[tokio::main]
use std::net::{IpAddr, SocketAddr};
use axum::{routing::get, Router};
use nebula_server::utilities::{
    run_wasm_module::{run_wasm_module},
};


async fn main() {
    let app = Router::new()
        .route(
            "/",
            get(|| async { "
              <!DOCTYPE html>
              <html>
                <body>
                  <div>Hei Simen!<br><br>Hvordan går det? :)</div>
                </body>
              </html>" 
            }
          ),
        )
        .route(
            "/wasm/:module/:input",
            get(run_wasm_module),
        );

    // run it with hyper on localhost:3000
    axum::Server::bind(&SocketAddr::new("127.0.0.1", "8080"))
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```

The root page looked like this:

![First "html" iteration](/blog-assets/first_landing_page.jpg)

While maybe not an technically impressive web page, and I'd expect more from my
self after 6 years of web development, I still had managed to get a web server
in something other than Node and Express up and running!

Smells like victory!

### Spinning up a wasm module

I have a GET end point in my app router, which routes users that hit
/wasm/:module/:input to the following function:

```rust
// src/utilities/run_wasm_module.rs
use axum::{extract::Path, response::Html};
use nebula_lib::wasm_runner::{self};
use serde::Deserialize;
use super::get_file_path::get_file_path;

#[derive(Deserialize)]
pub struct Params {
    module: String,
    input: String,
}

pub async fn run_wasm_module(
    Path(Params { module, input }): Path<Params>
  ) -> Html<String> {
    // Gets pwd to module passed as input
    let file_path = get_file_path(&module);

    // Call run_wasi_module function from nebula_lib
    match wasm_runner::run_wasi_module(&file_path, &input) {
        Ok(result) => Html(format!(
            "<div><h1>{}, input: {}</h1><p>Result was: {}</p><p>Startup time: {}</p><Total runtime: {}</p></div>",
            module, input, result.result, result.metrics.startup_time, result.metrics.total_runtime
        )),
        // Provide error message and reason. F.ex. if user provides faulty input.
        Err(err) => Html(format!(
            "<p>Whoops! Error!</p> <p style=\"color:red;\">{}</p>",
            err.to_string()
        )),
    }
}
```

### Creating a shared library

In order to honor separation of concern, I decided to create a separate lib
cargo crate that lives next to my web_server crate. In doing this, I don't have
to think about the wasmtime runtime in my web_server, and allows me to re-use it
in other projects if I find it fruitful in the future.

```rust
//! Example of instantiating a wasm module which uses WASI imports.

use std::{path::PathBuf, time::Instant};

use anyhow::Result;
use wasi_common::pipe::{ReadPipe, WritePipe};

use wasmtime::*;
use wasmtime_wasi::sync::WasiCtxBuilder;

use crate::models::{FunctionResult, Metrics};

pub fn run_wasi_module(path: &PathBuf, input: &str) -> Result<FunctionResult, anyhow::Error> {
    // 1. *
    let start = Instant::now();
    // Define the WASI functions globally on the `Config`.
    let engine = Engine::default();
    let mut linker = Linker::new(&engine);

    wasmtime_wasi::add_to_linker(&mut linker, |s| s)?;

    // 2. *
    let stdin = ReadPipe::from(input);
    let stdout = WritePipe::new_in_memory();

    // Create a WASI context and put it in a Store; all instances in the store
    // share this context. `WasiCtxBuilder` provides a number of ways to
    // configure what the target program will have access to.
    let wasi = WasiCtxBuilder::new()
        .stdin(Box::new(stdin.clone()))
        .stdout(Box::new(stdout.clone()))
        .build();

    let mut store = Store::new(&engine, wasi);

    // Instantiate our module with the imports we've created, and run it.
    let module = Module::from_file(&engine, path)?;

    let startup_time = start.clone().elapsed().as_millis();

    linker
        .module(&mut store, "", &module)
        .expect("the function to be linked");

    linker
        .get_default(&mut store, "")
        .expect("Should get the wasi runtime")
        .typed::<(), ()>(&store)
        .expect("should type the function")
        .call(&mut store, ())
        .expect("should call the function");

    // 3. *
    drop(store);

    // 4. *
    let contents: Vec<u8> = stdout
        .try_into_inner()
        .map_err(|_err| anyhow::Error::msg("sole remaining reference"))?
        .into_inner();

    // 5. *
    let result = String::from_utf8(contents)?.trim().to_string();

    // 6. *
    let total_runtime = start.elapsed().as_millis();

    println!(
        "Done! Elapsed time: {}ms, used {}ms to start up.",
        total_runtime, startup_time
    );

    Ok(FunctionResult {
        result,
        metrics: Some(Metrics {
            total_runtime,
            startup_time,
        }),
    })
}
```
