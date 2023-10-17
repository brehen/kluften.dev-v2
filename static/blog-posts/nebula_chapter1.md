# Building Nebula - Chapter 1: Building a Prototype with Rust

> The beauty of Rust and WebAssembly as the pillars for a new wave of Cloud
> computing

![Rust + Wasm/Wasi](/blog-assets/rust_wasi.jpg)

In the previous post, [Building Nebula - Prologue](/blog/nebula_chapter0), I
laid out the motivations behind Nebula - a FaaS prototype designed to explore
the power of WebAssembly. Let's dive into the "how".

## A journey beyond JavaScript

The first 4 years of my career was dedicated to mastering the JavaScript
ecosystem, where my primary quest was to enhance the user experience of every
interface I developed. There's no doubt; JavaScript, with its ubiquity, will
likely dominate the web space for many years. However, an encounter with the 2nd
edition of
[The Pragmatic Programmer](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/)
in 2020 nudged me in a fresh direction.

The book's tip #9, **"Invest regularly in your knowledge portfolio"**, struck a
chord. While the author advocated learning a new programming language annually,
I ended up choosing depth over breadth, immersing myself in the world of
functional programming through Elixir from 2020 to 2022.

But 2023? I decided to start a new side quest and discover what the 🦀 hype was
all about. The video
[Rust makes you feel like a GENIUS](https://www.youtube.com/watch?v=0rJ94rbdteE)
by No Boilerplate sealed the deal. I was, as no one says, _"crab trapped"_.

## Rust: More than just hype

My years navigating the vast sea of JavaScript have been both rewarding and
challenging. The language, while very flexible, can occasionally feel like
assembling a jigsaw puzzle with ever-changing pieces.

TypeScript improves this story by leaps and bounds in my day job, but for
building Nebula - a prototype designed to swiftly spin up WebAssembly modules -
I needed a more efficient and predictable environment.

### Why is Rust great for the Nebula journey

Beyond my own personal reasons for wanting to explore Rust, I have compiled some
of my reasons for choosing Rust.

1. **Safety First:** Rust's strict compiler and ownership model ensures that any
   code I write for my prototype is less prone to common bugs, memory leaks and
   data races. These features will hopefully act as safety rails for developing
   my prototype.
2. **Consistency and Reproducibility:** For my research I need reliable
   reproducibility. With its predictable performance, I should be able to gather
   better data to compare later.
3. **Streamlined Efficiency:** My thesis requires a playground to rapidly
   iterate and experiment on. Rust's powerful concurrency model and zero-cost
   abstractions allow me to refine the logic of my prototype without worrying
   about performance bottlenecks. (Famous last words?)
4. **A great WebAssembly story:** WebAssembly has been a first class citizen in
   the Rust ecosystem for a considerable time. Furthermore Fermyon - the company
   that inspired my thesis - places substantial trust in Rust for their platform
   and SDK.

## Building the first iteration

While the focus for my project is on building with Rust and run WebAssembly
modules as functions, the road to getting there includes many steps. As of
writing this, I already have a simple prototype working, and I'll try to lay out
my journey to landing there.

### Choosing the WebAssembly Runtime

For running Wasm modules on the platform, it's crucial to have a reliable
WebAssembly runtime. There's a plethora of options available: Wasmer, Wasmo,
Wasmi, WasmEdge, and Wasmtime to name a few. My research led me to notice that
Fermyon had opted for Wasmtime. After a deep dive into Wasmtime, I was impressed
by their well-documented Rust crate, allowing me to effortlessly integrate
Wasmtime into my Rust project. A pleasant surprise was realizing that the final
binary build didn't necessitate having the wasmtime runtime installed on my
server.

### Designing the Web Server Infrastructure

While the choice of WebAssembly runtime was crucial, the actual mechanism to
serve and interact with these modules was equally vital. How do industry giants
do it? Amazon with their Lambda, Google with Cloud Functions, or Microsoft with
Azure Functions? Without the exact blueprint, I decided on crafting a feasible
solution for my experimentation: a web server using Rust and Axum.

The backbone of this server includes a shared crate library. This library acts
as the bridge between the web server and the Wasmtime runtime. The envisioned
workflow is simple:

In my sketch below, I've drawn up a rough idea of what I want the platform to do
in the first iteration.

![Rough sketch of the first iteration](/blog-assets/nebula_very_rough_sketch.png)

1. User A calls the API (most likely REST API) with GET /api/treats/10
   (/api/:module/:input)
2. Axum web server receives request, finds the corresponding wasm module
   "deployed" to the server from the module name, creates a wasmtime instance
   and provides it with the input.
3. The wasm module runs the function based on provided input and returns the
   output as a valid Wasm type. (In this case i32)
4. The web server responds the user with the value returned from the wasm
   module.
5. ????
6. Neko is a happy dog, because he got 10 treats at (hopefully) BLAZINGLY fast
   speeds!

### Humble beginnings

My main.rs file looked like this in my first iteration:

```rust
#[tokio::main]
use std::net::{IpAddr, SocketAddr};
use axum::{routing::get, Router};

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
        );

    // run it with hyper on localhost:3000
    axum::Server::bind(&SocketAddr::new("127.0.0.1", "8080"))
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```

The root page now looks like this:

![First "html" iteration](/blog-assets/first_landing_page.jpg)

While maybe not an technically impressive web page, and I'd expect more from my
self after 6 years of web development, I still had managed to get a web server
in something other than Node and Express up and running!

Smells like victory!

## Closing words

Now you might be wondering: "Wait. What happened with steps 2 through 6? Neko
ain't getting no treats with this rudimentary Hello World web server?? What
gives??".

Great question! We'll explore that further in the next chapter!

See you in [Building Nebula - Chapter 2](/blog/nebula_chapter2)
