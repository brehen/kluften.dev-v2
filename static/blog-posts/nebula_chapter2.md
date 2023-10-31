# Building Nebula - Chapter 2: Let's run some WebAssembly modules

> Getting up and running with Wasmtime on our Rust server

![A Shiba inu running](/blog-assets/shiba_running.jpg)

## Some basic terminology

In my previous two posts I mainly spent your time talking about why and how I'm
building a Rust web server that can spin up WebAssembly modules in the
background.

### "Isn't this just going to be a web server that spins up the wasmtime runtime in the background? Is that a Serverless Faas Platform?"

...

Yes. Yes that's what I'm making. And I'm not 100% sure if the terminology
matches, but ChatGPT seems to agree with me!

("Regenerate" the answer to get the actual answer.)

```chatgpt
<p class="w-full bg-slate-200 rounded-t-lg text-black pl-4 py-2">
  ChatGPT
</p>

<p class="text-lg font-bold p-4 md:p-8 grid grid-cols-[50px,1fr] gap-2 bg-slate-800">
  <img src="/blog-assets/neko-smile.png" class="h-16 mr-4" />
  Could you define Nebula as a FaaS platform? It's essentially a glorified web
  server that can spin up wasmtime in the background and runs some WebAssembly
  modules.
</p>

<span class="relative min-h-[0px] overflow-hidden flex rounded-b-lg text-green-300">
  <span class="w-[200%] grid grid-rows-[100%,100%] gap-2 bg-slate-900" id="wrapper">
    <p class="w-full grid grid-cols-[50px,1fr] hide p-4 md:p-8 h-fit" id="second">
      <img src="/blog-assets/gatsby-hmm.png" class="h-12 w-12" alt="gatsby avatar" />
      Certainly! FaaS, or "Function as a Service," is a category of cloud services that allows developers
      to run individual functions in response to events without the complexity of building and maintaining
      the infrastructure.<br /><br />
      Your prototype seems to fit into this category. It takes an HTTP request and then runs a specific
      WebAssembly module in response. The logic encapsulated within the WebAssembly module can be seen
      as the "function" in "Function as a Service."<br /><br />
      It's worth noting, though, that traditional FaaS platforms offer more features like auto-scaling,
      monitoring, logging, and more, which you might not have in your prototype. However, calling it
      a "basic FaaS platform" or a "prototype FaaS platform" for WebAssembly is certainly appropriate
      given its functionality.
    </p>
    <p class="w-full grid grid-cols-[50px,1fr] gap-2 p-4 pb-6 md:p-8 h-fit invisible" id="first">
      <img src="/blog-assets/gatsby-hmm.png" class="h-12 w-12 mr-4" alt="gatsby avatar" />
      Yes. Don't worry about it, that's what all other FaaS platforms are anyway, you go champ 🔥 🙏
      🏃
    </p>
  </span>
</span>
```

So. Now that we've ensured that what I'm trying to build could be called a "FaaS
Platform", even though it is a bit limited, without auto-scaling, monitoring,
logging and more. For the sake of experimentation, some of these features should
be implemented in some shape or form. The dream is to read power consumption
from the server during each function call, and attempt to measure the
"footprint" for each function, but we'll see how far I'll get.

### "Hey, what even are WebAssembly modules?"

![Wait a minute, who are you meme kid looking at the Wasm Logo](/blog-assets/what-even-are-wasm-modules.jpg)

Great question, me!

I've spent a lot of words the past few blog posts laying out my plans for
building Nebula to run Wasm modules as functions, but I never explained beyond
"wow, quick startup times and small package sizes."

Giving a thorough description of the magic of WebAssembly modules might be a bit
out of scope for this blog post, but I'll try to give a short and sweet
description.

WebAssembly, or Wasm for short, is like a universal language for computer
programs. Imagine you wrote down a recipe, and no matter where you went in the
world, everyone could understand and cook it without a translator. That's Wasm
for code. It allows programs to run everywhere, and even though it was first
designed for the browser, it's design made it a perfect fit for servers as well.

For the sake of Nebula, WebAssembly modules are these recipes, ready to be
whipped up and served in moments!

![Let the damn dog cook](/blog-assets/let_neko_cook.jpeg)

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
