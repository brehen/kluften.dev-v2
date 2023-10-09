# Surfing the Third Wave: 5 things I learned about WebAssembly in Barcelona

In March I attended the debut of the Wasm IO conference, arranged in Barcelona,
courtesy of a generous course and conference budget from my employer,
JProfessionals. This lets me explore technologies that catch my interest and
might be relevant for our customers.

The conference brought together leading experts from around the world to discuss
the latest advancements and innovations in Wasm. In this blog post I will share
with you 5 things I learned in Barcelona and attempt to describe the exciting
future heralded as the _third wave of cloud computing_.

## First of all, what is Wasm? 🤔

![WebAssembly](/blog-assets/wasm.jpg)

WebAssembly, often abbreviated as Wasm, is a low-level binary format designed to
run alongside JavaScript in web browsers. You can write code in a language you
already know, including C, C++, Go, and Rust, and compile it to Wasm. Figma, the
company Adobe is aiming to aquire for 20$ billion dollars (🤯), has been using
Wasm to bring their design tool written in C++ to
[run in the browser](https://learn.microsoft.com/en-us/azure/aks/use-wasi-node-pools)
since 2017.

The Mozilla Foundation initially designed and developed Wasm to complement
JavaScript in the browser, but its "run everywhere, fast, secure, and efficient"
philosophy translated well to server-side applications as well, through a Wasm
runtime like Wasmtime. Shopify and Fastly already uses Wasmtime for
[hosting their Edge functions](https://bytecodealliance.org/articles/wasmtime-1-0-fast-safe-and-production-ready).
Thanks to the efforts of Wasmtime and other runtimes like it we're now able to
run Wasm outside the browser, but how do we make a technology designed to run
sandboxed in a browser perform operations we expect of a server? That's where
WASI comes in.

## 1. WASI is a pretty cool project 😎

WebAssembly System Interface, or WASI, is an API designed to allow WebAssembly
applications access to system features like file and filesystem access. With
WASI, developers can bring Wasm out of the browser and into server applications.
WASI aims to promote code re-usability, cross-platform applications, and
containerization.

![Wasi + wasm = true](/blog-assets/wasi_wasm.jpg)

When WASI was announced back in March 2019, Solomon Hykes, the creator of
Docker, tweeted this:

> "If Wasm+WASI existed in 2008, we wouldn't have needed to create Docker.
> That's how important it is. Webassembly on the server is the future of
> computing. A standardized system interface was the missing link. Let's hope
> WASI is up to the task!" -
> [Solomon Hykes](https://twitter.com/solomonstre/status/1111004913222324225?lang=en)

This quote foreshadowed a potential new wave of cloud computing.

Talks about WASI:

- [The World of WASI](https://www.youtube.com/watch?v=nOkzmOapiSY): Technical
  introduction to the past, present and future of WASI
- [wasi-cloud: The Future of Cloud Computing With
  WebAssembly](https://www.youtube.com/watch?v=Z7cSjIp7vRg): Introducing a
  collection of WASI proposals that provide secure and standarised interfaces
  for running Wasm on the cloud

## 2. We're entering the third wave of cloud computing 🏄

![Three waves of cloud compute](/blog-assets/three_waves.png)

The first wave of cloud computing saw the rise of virtual machines running on
managed infrastructure. The following second wave is attributed to the rise of
containerization and orchestration through tools like Docker and Kubernetes.

We've come a long way since the days of self-managed on-premise data centers,
but rather than having companies hire their own infrastructure engineers to
manage proprietary servers, they now hire DevOps engineers to build and develop
proprietary developer platforms. Serverless computing offers a solution to this,
enabling developers to simply write the code and run it without having to manage
entire platforms.

While serverless and its subset functions-as-a-service (FaaS) have been around
for a while, they still rely on the advancements of the previous two waves. This
is where everyone who attended Wasm IO sees the potential for WebAssembly to
address the limitations of current platforms and usher in the third wave of
cloud computing.

Imagine a world where you write chunks of a given service/application in
different programming languages, choosing the best suited language for each
task, which is then compiled into a single target that can run anywhere a Wasm
runtime can run?

## 3. We might see the return of "Write once, run everywhere" 🤔

Tyler McMullen, CTO of Fastly, shared his insights on Wasm and its potential to
revolutionize the way software developers develop by enabling us to "_actually_
write once, run everywhere".

During his talk, McMullen used Fastly's journey to illustrate how we have
reached a point where we can "write once, run everywhere". By this he means
"Write once, run everywhere _safely_", implying that the programs we create
should be able to operate _safely_ on any device on any architecture, on
everything from browsers to servers, ARM to intel and embedded devices.

This allows developers to write code in one programming language, and run in any
other language, as long as both languages support Wasm as a compilation target.
Imagine creating a library in any supported language adding it as a dependency
in all your code bases without needing to refactor.

But wait, were we not promised the same thing with Java Applets? It promised a
similar "write once, run everywhere" approach. What went wrong with Java?
According to McMullen, Java lacked a fundamental sandboxing and security model
from the beginning, which led to constant vulnerabilities across the numerous
devices it aimed to target. While it was theoretically possible to run Java
programs on any device, the question remains - should you?

Turns out, Wasm can also used in Java, opening up new possibilities for this
language as well. 🤓

[You can watch Tyler's talk here](https://www.youtube.com/watch?v=dhoVlVu2XAw)

## 4. You will be able to tap into Wasm in Java and Kotlin applications

If you're a Java or Kotlin developer and curious about how to use WebAssembly in
your applications, there were two talks that presented projects that can prove
helpful in the future.

One project, called Extism, aims to let you develop Wasm plugins in various
languages that can be utilised in your Java programs. As previously mentioned,
one of the most exciting aspects of Wasm is the ability to write code in one
language and run it in others. Extism aims to make progress towards that goal.
[You can learn more about it here](https://github.com/extism/extism).

Another talk, led by Zalim Bashorov, a JetBrains employee leading the
integration of Wasm into the Kotlin ecosystem, and Sébastien Deleuze, a core
committer of the Spring Framework, introduced the KoWasm project. Initially,
Wasm in Kotlin has been used to target web browsers, but this project seeks to
leverage WASI to facilitate server-side and full stack development. The main
concept is to have all the code, both server-side and browser-based, compiled to
Wasm and run on Wasm runtimes universally.

The talks:

- [Give super powers to Java with WebAssembly](https://www.youtube.com/watch?v=5HBglrvHtWg)
- [Introducing Kotlin/Wasm](https://www.youtube.com/watch?v=LCtMC_IVCKo)

That all sounds great, but how would you go about trying all this out?

## 5. Spin by Fermyon is ready for production

One of the main sponsors of the conference, Fermyon, kicked off the conference
with announcing that their developer tool, Spin, hit 1.0 and is production
ready. Fermyon is one of the companies surfing ahead of the curve and attempting
to make the third wave a success.

Fermyon describes spin on their website as such;

> Spin is the developer tool for building WebAssembly microservices and web
> applications.

What they promise is that you can bring your own supported WASI-compatible
language, write your application and deploy on a Fermyon instance. You can
either use their own proprietary SaaS, Fermyon Cloud, or you can install Fermyon
on other platforms, like AWS, Azure or GCP.

Thorsten Hans, a Cloud-native consultant from Germany, held a great talk about
getting started with Spin with:
[Spin it! Jumpstart your Wasm journey with
Fermyon Spin](https://www.youtube.com/watch?v=ai5p5oubTm8)

To read more about Spin

- [Getting started with Spin](https://developer.fermyon.com/spin/index)
- [Spin features language support](https://developer.fermyon.com/spin/language-support-overview)
- [How-to install on other platforms](https://github.com/fermyon/installer)

## What now?

I wouldn't say it's time to tear down all developer platforms relying on Docker
and Kubernetes, but after this conference I'm pretty convinced WebAssembly will
play a big role in the future of our Cloud. Writing Wasm by itself seems like a
chore, but I have some great resources that can help you getting started,
relying on perhaps more familiar languages.

- [Wasm by example](https://wasmbyexample.dev/): A great hands-on introduction
  using code snippets from languages like Rust and AssemblyScript. If you're
  mainly a TypeScript developer like myself, the examples in AssemblyScript will
  be familiar.
- [Fermyon Workshop](https://github.com/fermyon/workshops): I attended a
  workshop hosted by Fermyon, where they tasked us with picking a supported
  language and build a simple magic 8 ball application and deploy it, all with
  Spin. I chose Rust, and spent most of the time fighting with ownership, and in
  hindsight should have chosen TypeScript. You can follow the exercices from the
  link, and it should give you a some pointers on what you can do with this.

Personally, I'm not entirely convinced that we'll abandon Docker and Kubernetes
in favor of Wasm, but we might see a world where they work in tandem,
complementing each other. Maybe that is what the third wave of cloud computing
will end up being?

Who knows what the _fourth_ wave will bring? 🏄

![Neko surfing](/blog-assets/neko_surfing.jpeg)
