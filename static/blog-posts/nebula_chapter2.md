# Building Nebula - Chapter 2: Let's write some Wasm/Wasi modules

> Some actual code examples

![A Shiba inu running](/blog-assets/shiba_running.jpg)

## Some basic terminology

In my previous two posts I mainly spent your time talking about why and how I'm
building a Rust web server that can spin up WebAssembly modules in the
background.

> Isn't this just going to be a web server that spins up the wasmtime runtime in
> the background? Is that a Serverless Faas Platform?

...

Yes. Yes, that is what I'm making. And I'm not 100% sure if the terminology
matches, but I checked with ChatGPT and got the green card.

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
    <p class="w-full grid grid-cols-[50px,1fr] gap-2 hide p-4 md:p-8 h-fit" id="second">
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

### "Hey, what even are Wasm/Wasi modules?"

![Wait a minute, who are you meme kid looking at the Wasm Logo](/blog-assets/what-even-are-wasm-modules.jpg)

Great question, me!

I've spent a lot of words the past few blog posts laying out my plans for
building Nebula to run Wasm modules as functions, but I never explained beyond
"wow, quick startup times and small package sizes."

Giving a thorough description of the magic of WebAssembly modules might be a bit
out of scope for this blog post, but I'll try to give a short and sweet
description.

**WebAssembly**, or **Wasm** for short, is like a universal language for
computer programs. Imagine you wrote down a recipe, and no matter where you went
in the world, everyone could understand and cook it without a translator. That's
Wasm for code. It allows programs to run everywhere, and even though it was
first designed for the browser, it's design made it a perfect fit for servers as
well.

The **WebAssembly System Interface**, or **Wasi** for short, is project that
aims to package our Wasm code in such a way that it can interface with an
underlying system, and this is what enables us to run Wasm on our servers and
allow us to actual server things.

For the sake of Nebula, Wasm/Wasi modules are these recipes, ready to be whipped
up and served in an instant on our server!

| ![An illustration of an AI generated Shiba Inu chef cooking with WebAssembly, Rust and Wasi spices, cooking Nebula.](/blog-assets/let_neko_cook.jpeg) |
| :---------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                _Introducing: the logo_                                                                |

## Some actual code

As I wrote in the previous post, I'm currently faced with this rather simple
"Hello Simen" web page, which doesn't even render HTML properly.

![First "html" iteration](/blog-assets/first_landing_page.jpg)

In this chapter we'll look at how we can move from responding with plain text,
and hopefully manage to run some functions compiled to WebAssembly that we can
run upon request. Let's start with writing our first WebAssembly module! I am
developing this platforms within the confines of Academia, so I'll start with
the most useful calculation I can think of. Fibonacci!

### Why Fibonacci?

In the famous sequence dubbed the "Fibonacci sequence", every number in the
sequence is the sum of the two numbers preceding it in the sequence.

Fib(0) is 0, Fib(1) is 1, Fib(2) is also 1, because 0 + 1 = 1. Fib(3) is 2 (1+1)
and Fib(4) is 3 (2+1). FibSequence(4) results in the sequence [0, 1, 1, 2, 3].
This sequence goes on and on, and the number we're able to get out is only
limited by the maximum number we type it to be.

| ![Neko stylised as the mathematician Fibonacci](/blog-assets/nekonacci.jpg) |
| :-------------------------------------------------------------------------: |
|                            _Nice sequence, bro_                             |

This gets more interesting when we to a much larger number n in the sequence. I
haven't found much use of this in my day to day, but it will serve as a nice way
to attempt to stump the computer while benchmarking in the future, to see how
Nebula behaves when under load.

The actual thesis I applied for back in 2022 that my supervisors had advertised
was named "Academemes.com - Experiment on new ways to develop Cloud Native
Applications while testing them out serving academic memes." So I might
implement some "zany memey 🤪" functions down the road, but for now I'm sticking
with simple functions that I can write in Rust and compile to Wasi modules.

Here's what I ended up with:

```rust
fn fibonacci(size: i32) -> Vec<u64> { 
    let mut sequence = Vec::<u64>::new();

    for i in 0..size {
        let j = i as usize;
        if i == 0 || i == 1 {
            sequence.push(i as u64);
        } else {
            let next_value = sequence[j - 1] + sequence[j - 2];
            sequence.push(next_value);
        }
    }

    // println!("Help me");

    sequence

}
```

<p class="text-right mt-2 mr-2">
  <a href="https://github.com/brehen/nebula/blob/v0.2/functions/fibonacci/src/main.rs">
    [Source]
  </a>
</p>

Now, we can build it with wasm32-wasi as the target, provide the --release flag
and watch it compile our rust code into a Wasi binary file:

```shell
$ cargo build --target wasm32-wasi --release

    Compiling fibonacci v0.1.0 (~/nebula/functions/fibonacci)
      Finished release [optimized] target(s) in 1.07s
```

This results in a fibonacci.wasm in the projects target/wasm32-wasi/release
folder that we could theoretically upload as a file to a platform and run.

![Wasm binary file in Finder](/blog-assets/wasm_binary.jpg)

But in order to run this fibonacci function with a given output and receive an
expected output, we need to write some more code!

![Wasm binary in finder](/blog-assets/wasm)

### Wrapping the function into a Wasi module

Due to my limited experience and knowledge of the Rust ecosystem and
specifically the [Wasmtime crate](https://wasmtime.dev/) I struggled to get my
example up and running.

```rust
```
