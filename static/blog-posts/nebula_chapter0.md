# Building Nebula - Prologue: A beginning

> A Function-as-a-Service platform powered by WebAssembly, built with Rust

| ![Nebula](/blog-assets/eagle-nebula.jpg)                                   |
| -------------------------------------------------------------------------- |
| Picture of the Eagle Nebula [src](https://unsplash.com/photos/6tUdJ3fWgBg) |

By now, you might have stumbled upon this well-known quote:

> If WASM+WASI existed in 2008, we wouldn't have needed to created Docker.
> That's how important it is. Webassembly on the server is the future of
> computing. A standardized system interface was the missing link. Let's hope
> WASI is up to the task!
> [_Solomon Hykes, founder of Docker_](https://twitter.com/solomonstre/status/1111004913222324225?lang=en)

It's a bold statement that has been circulating ever since. I'm currently
exploring this vision, where I've embarked on an adventure to build a FaaS
prototype that exclusively runs WebAssembly modules. The goal? To discover the
potential computational and energy efficiency such an approach might offer,
forming the backbone of my master's thesis research.

In essence, I aim to compare the performance and efficiency of predominant FaaS
platforms - such as AWS Lambdas, Google Cloud Functions and Azure systems -
against a system that rapidly initialises Wasm modules, executes the underlying
function, and promptly shuts them down.

## Finding my Master thesis topic

I'm building this prototype in order to perform some experiments for my Master's
Thesis as part of my Master's degree in Programming and System Architecture at
the University of Oslo. I initially started on this degree back in 2017, after
achieving my bachelor's degree in Computer Engineering from OsloMet, but decided
to jump off after the first semester when I got a job offer for working fulltime
as a ServiceNow consultant.

Ever since then, I've had 1/4th of a degree completed, and decided to pick it up
again in 2022 and attempt to finish it part time. At UiO there's a clear
preference for "long" master theses, meaning that 50% of your degree is made up
of the thesis itself. In order to motivate myself to this undertaking that would
occupy most of my free time, I decided to focus on what technologies I would
like to see myself working on in the future, and was lucky enough to land a
thesis project where I could dive into the Rust and WebAssembly ecosystem.

I can attribute the initial idea for my master's thesis to the podcast episode
["Fermyon with Matt Butcher" from the Rustacaen Station Podcast](https://rustacean-station.org/episode/matt-butcher/).
Fermyon is a Cloud company that are heavily invested in the WebAssembly space,
and in the episode Matt Butcher, the CEO of Fermyon, tells the story of how
Fermyon came to be, and why they decided to build a Cloud platform that only
allows developers to run programs that can be compiled to WebAssembly. In his
explanation, he mentioned that they observed rather insane startup times
compared to more typical container based function-as-a-service offerings out
there, going from comparable service in a Docker container taking **300ms+**
just to start up, down to **sub 1ms** startup times for a comparable Wasm module
delivering the same functionality.

![Graph 1](/blog-assets/prologue-wasm_vs_docker_neko.svg)

Furthermore, as they advertise on their own
[webpage](https://www.fermyon.com/#fermyon-benefits) they saw that with Wasm
modules they were able to achieve image/binary sizes down to ~1% of a comparable
service packaged in Docker, from 230MB -> 3.2MB!

![Graph 2](/blog-assets/prologue-wasm_vs_docker_neko_size.svg)

## Why purse a FaaS prototype?

These metrics presented by Fermyon and the WebAssembly community are nothing
short of remarkable. They've summarised their vision in the "third wave of cloud
computing", with Virtual machines being the first wave and Containerisation
(Docker) being the second wave. This begs the question: What kind of energy
savings might we achieve if the industry leans more into these efficient cloud
technologies?

Guided by this curiosity - and with invaluable insight from my university
supervisors - I formulated the hypothesis for my thesis:

> It is possible to develop a Pure FaaS platform that scale to near-zero
> resource usage, using WebAssembly modules

It's an ambitious objective, no doubt. Yet, this broad premise provides me ample
space in how I end up building the prototype this fall. A cornerstone for this
prototype? The principle of "pure" functionality.

## Building a "Pure" FaaS

You've probably noticed the emphasis on "pure" in my hypothesis. In order to
develop a prototype I can start experimenting on within the time-frame of a
Master's thesis, I decided to scope it down to explore a FaaS platform that
operate on pure functions.

For those unaware of what a "pure function" is, it can be defined as such:

> A pure function is a function that, given the same input, will always return
> the same output and does not have any observable side effect.
> [Mostly Adequate](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch03.md#oh-to-be-pure-again)

This principle of purity assures consistent output for consistent output, a
quality that opens up for interesting experimenting. This will allow me to
explore some interesting orchestration and caching patterns for functions
deployed to the platform, much like a hypothetical example illustrated below:

![Chaining functions example](/blog-assets/pure-function-chain-example.svg)

Naturally, building such a dynamic system has its challenges, and there's always
a risk of overextending the scope of my thesis. Thus, my focus might lean more
towards experimenting with pre-defined functions on the platform. We'll see!

If you've journeyed with me this to this point, I really appreciate your time
and interest! I'm excited about sharing more technical details down the line.
Stick around for Chapter 1 where we'll delve deeper into Nebula. When it's up,
you'll find the next chapter here:
[Building Nebula - Chapter 1](/blog/nebula_chapter1)
