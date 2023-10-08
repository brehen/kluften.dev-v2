# Building Nebula - Prologue

A Function-as-a-Service platform powered by WebAssembly and WASI

Don't shoot me if you've seen this quote plastered everywhere:

> If WASM+WASI existed in 2008, we wouldn't have needed to created Docker.
> That's how important it is. Webassembly on the server is the future of
> computing. A standardized system interface was the missing link. Let's hope
> WASI is up to the task!

But, I'm currently exploring this premise and working on building a FaaS prototype that exclusively runs WebAssembly modules in order to measure the potential computational savings that can be achieved, and consequently how much power can be saved on more efficient technologies for my master's thesis.

I set out to compare how the current status quo, being FaaS platforms like AWS lambdas, Google Cloud Functions and Azure Functions, compares to a platform that quickly spins up Wasm modules, runs the requested function, and spins down again.

> Note: this first blog post is mostly the background and motivation for building Nebula, if you want to jump straight to the technical implementation, you can start with Part 1 here: [Building Nebula - Part 1](/blog/nebula-chapter1)

## Why build a FaaS prototype?

I'm building this prototype in order to perform some experiments for my Master's Thesis as part of my Master's degree in Programming and System Architecture at the University of Oslo.
I initially started on this degree back in 2017, after achieving my bachelor's degree in Computer Engineering from OsloMet, but decided to jump off after the first semester when I got a job offer for working fulltime as a ServiceNow consultant.

Ever since then, I've had 1/4th of a degree completed, and decided to pick it up again in 2022 and attempt to finish it part time.
At UiO there's a clear preference for "long" master theses, meaning that 50% of your degree is made up of the thesis itself.
In order to motivate myself to this undertaking that would occupy most of my free time, I decided to focus on what technologies I would like to see myself working on in the future, and was lucky enough to land a thesis project where I could dive into the Rust and WebAssembly ecosystem.

I can attribute the initial idea for my master's thesis to the podcast episode ["Fermyon with Matt Butcher" from the Rustacaen Station Podcast](https://rustacean-station.org/episode/matt-butcher/).
In this episode, Matt Butcher, the CEO of Fermyon goes in depth as to why they decided to startup a company focused on building a cloud platform that exclusively runs computations for its users on programs compiled to WebAssembly modules and uploaded to their cloud, either self-hosted, or on their Fermyon Cloud offering.
In his explanation, he mentioned that they observed rather insane startup times compared to more typical container-based function-as-a-service offerings out there, going from comparable service in a Docker container taking **300ms+** just to start up, down to **sub 1ms** startup times for a comparable Wasm-module delivering the same functionality.

|                 ![Graph 1](/blog-assets/prologue-wasm_vs_docker_neko.svg)                  |
| :----------------------------------------------------------------------------------------: |
| \_The bars are the right scale, as it would be impossible to show < 1ms compared to 300ms+ |

Furthermore, as they advertise on their own [webpage](https://www.fermyon.com/#fermyon-benefits) they saw that with Wasm modules they were able to trim down the resulting compiled image/binary down to ~1% of a comparable service packaged in Docker, from ~230MB -> 3.2MB!

| ![Graph 2](/blog-assets/prologue-wasm_vs_docker_neko_size.svg) |
| :------------------------------------------------------------: |
|            \_Same issue with the scale here as well            |

## Motivation

This sounded insane to me, and the amazing work Fermyon and the WebAssembly community is doing to spur the "third wave of cloud computing"
motivated me to wanting to explore how much power we might be able to save if we, as an industry, move towards more efficient technologies to power our cloud.

I landed on this hypothesis for my thesis:

> It is possible to develop a Pure FaaS platform that scale to near-zero
> resource usage, using WebAssembly modules

Perhaps a lofty goal, but it leaves me a lot of room on what scope I end up with for the prototype I'm building this fall, and I'll go into more technical detail and the overall design in the next part!

If you found this interesting, look out for the next chapter here: [Building Nebula - Chapter 1](/blog/nebula-chapter1)
