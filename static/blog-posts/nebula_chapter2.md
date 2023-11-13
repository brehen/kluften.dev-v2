# Building Nebula - Chapter 2: Let's write some Wasm/Wasi modules

> How to interact with WebAssembly modules

![A Shiba inu running](/blog-assets/shiba_running.jpg)

## Some basic terminology

In my previous two posts I laid out about why and how I'm building a Rust web
server that can spin up WebAssembly modules on request.

> Isn't this essentially a web server that spins up the wasmtime runtime in the
> background? Is that a Serverless Faas Platform?

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

Great question!

Previously I've been focusing more on the "why" and "how" of using Wasm modules
in Nebula, emphasizing their quick startup times and compact sizes. What remains
is to delve into the nature of WebAssembly modules themselves.

**WebAssembly**, or **Wasm** for short, is akin to a universal language for
computer programs. Imagine you wrote down a recipe in such a way that anyone in
the world could understand and cook it without needing a translator. That is
what I imagine Wasm modules to be for code. It allows programs to run virtually
everywhere, and even though it was first designed for the browser, its design
enabled it to be a perfect fit for servers as well.

Wasm was designed to run sandboxed in a browser, so how can we run it on the
server?

This is where the **WebAssembly System Interface**, or **Wasi**, comes in into
play. Wasi is a project that is built to package our Wasm code in such a way
that it can interface with an underlying system, and this is what enables us to
run Wasm on our servers and allow us to do server specific tasks.

In the context of Nebula, Wasm/Wasi modules are these recipes, ready to be
whipped up and served in an instant on our server!

| ![An illustration of an AI generated Shiba Inu chef cooking with WebAssembly, Rust and Wasi spices, cooking Nebula.](/blog-assets/let_neko_cook.jpeg) |
| :---------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                _Introducing: the logo_                                                                |

## Some actual code

In the previous chapter, I concluded with a simple "Hello Simen" web page. It
didn't even render HTML properly!

![First "html" iteration](/blog-assets/first_landing_page.jpg)

Now, let's dive deeper into the world of compiling Rust code into Wasi modules,
which we will then run on Wasmtime. We'll start by coding our first function!
Given my academic backdrop for this prototype, I'll begin with a well known
computational challenge: the Fibonacci sequence.

### Why Fibonacci?

The Fibonacci sequence is a classic in computer science, where each number is
the sum of the two preceding ones. Starting with 0 and 1, the sequence unfolds
as 0, 1, 1, 2, 3, 5, 8, and so forth. While I haven't found a practical use for
this during my career, it serves as a nice starting function for future
benchmarking.

| ![Neko stylised as the mathematician Fibonacci](/blog-assets/nekonacci.jpg) |
| :-------------------------------------------------------------------------: |
|                            _Nice sequence, bro_                             |

Here's my Rust code for generating the Fibonacci sequence:

```rust
// src/main.rs
fn fibonacci(size: i32) -> Vec<u64> { 
    // Create a vector (dynamically sized array-ish) to hold sequence
    let mut sequence = Vec::<u64>::new();

    for i in 0..size {
        let j = i as usize;
        // First two numbers equal their index
        if i == 0 || i == 1 {
            sequence.push(i as u64);
        } else {
            // Calculate next number in sequence and push to vector
            let next_value = sequence[j - 1] + sequence[j - 2];
            sequence.push(next_value);
        }
    }

    // println!("Help me");

    // Implicitly return the sequence
    sequence
}

// Print out the returned value from the function in the main function, the entry point to Rust programs
fn main() {
  println!("The first 5 fibonacci numbers are: {:?}", fibonacci(5));
}
```

<p class="text-center mt-2">
  <a href="https://github.com/brehen/nebula/blob/v0.2/functions/fibonacci/src/main.rs">
    [Source]
  </a>
</p>

Once we build this with wasm32-wasi as the target, we get a Wasi binary file
that we can deploy and run.

```shell
$ cargo build --target wasm32-wasi --release

    Compiling fibonacci v0.1.0 (~/nebula/functions/fibonacci)
      Finished release [optimized] target(s) in 1.07s
```

And then we can execute it using the Wasmtime CLI

```shell
$ wasmtime ./target/wasm32-wasi/release/fibonacci.wasm

    The first 5 fibonacci numbers are: [0, 1, 1, 2, 3]
```

Pretty sweet! But as you might have noticed, I added a main function in my
main.rs file where I called the function inside a println macro call. That's not
very "FaaS platformy-esque", the users would normally expect to be able to
provide their own input and get something out.

## Handling Input/Output with Wasi

I wanted to build my Wasi-runner library code to be as generic as possible,
where I could simply provide the name of the function, which would then result
in Nebula looking up if it has the corresponding module binary file present,
take in the input, run the function and return the output.

I'm currently a level 2 newbie in the Rust ecosystem, with most of my skill
points previously allotted to technologies related to JavaScript, like
TypeScript, React and Node. This shift presented some challenges to me: building
library code that allows me to generically craft Wasi modules, aligned with
Rust's idiomatic practices, was quite an adventure. During this journey I
crossed paths with Peter Malmgren's blog, where he had written an article:
"Getting data in and out of WASI modules"
([link here](https://petermalmgren.com/serverside-wasm-data/)). His insights, in
which he laid out two different approaches to how you could achieve this back in
2022, proved to be invaluable. After experimenting, I found his first method, in
which he relies on stdin and stdout for input and output respectively, to be
particularly effective for my use case.

### Treating WASI like a regular program

Because WASI was designed to be POSIX-like, it has access to resources like
standard input and output, CLI arguments, environment variables, pipes and
network sockets. Peter explains it better than me, in his article, so if you're
interested I would recommend checking it out.

This mindset shifted my thinking around how I could solve this input/output
issue. And while there might be more idiomatic ways to solve it, I ended up
relying on stdin and stdout for my examples.

```rust
// Import stdin and "attach" BufRead to the program
use std::io::{stdin, BufRead};

fn main() {
    // Create stdin instance
    let stdin = stdin();
    let mut input = String::new();

    // Wait for data to be passed to stdin
    stdin
        .lock()
        .read_line(&mut input)
        .expect("Failed to read line");

    // Attempt to parse it
    let parsed_input: Result<u32, _> = input.trim().parse();
    
    // Pattern match on the input. Default to 1 if the stdin was invalid 
    let size = if let Ok(size) = parsed_input {
        size
    } else {
        1
    };
    // Calculate the sequence and print it to stdout
    let sequence = fibonacci(size);
    println!("{:?}", sequence);
}

fn fibonacci(size: u32) -> Vec<u64> {
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

In this code, I await the input from stdin before the program goes further than
line #7. Then I attempt to parse it to an u32 integer, if successful it will
move on and pass the input to the fibonacci function. If it receives something
other than a value that can be parsed to u32, it will default to 1, in order to
simplify error handling.

If we build this again, it still compiles and compiles to a **.wasm** module.

```shell
$ cargo build --target wasm32-wasi --release
    Compiling fibonacci v0.1.0 (~/nebula/functions/fibonacci)
      Finished release [optimized] target(s) in 0.53s
```

Then we can pipe in our input as stdin and receive our output like so:

```shell
$ echo 10 | wasmtime ./target/wasm32-wasi/release/fibonacci.wasm > out.txt
$ cat out.txt
  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

Cool! Now we're able to pass input to our Wasi module, and get output back! I
realise that relying on side effects such as reading stdin and stdout might take
a hit on performance, but I have taken the same approach to providing input and
receiving output to the same functions wrapped in Docker images as well, in
order to fairly compare the two.

## Closing words

If you're interested in seeing how the project was at the end of this blog post,
I have tagged it as version v0.2 in my GitHub repo.
[Link here](https://github.com/brehen/nebula/tree/v0.2)

The Fibonacci example lives under the folder functions/fibonacci.

So, how can we expand on this way to interact with WebAssembly compiled Rust
programs and expose them as functions for users of Nebula to call?

In the next chapter we'll look at adding the Wasmtime crate to the project and
transform our "Hello Simen" web-server into a fully fledged FaaS!*

Stay tuned for [Chapter 3](/blog/nebula_chapter3)!

\**_It will not be fully fledged for a good while, and I'm not sure if it ever
will._
