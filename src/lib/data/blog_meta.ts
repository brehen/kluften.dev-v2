type BlogMeta = {
	slug: string
	status: 'published' | 'draft'
	title: string
	published: string
	description: string
	canonicalUrl?: string
	canonicalDate?: string
  sequel?: {
  url: string
  label: string
  }
	glossary?: {
		word: string
		description: string
	}[]
}[]

export default [
	{
		slug: 'nebula_chapter3',
		published: '',
		status: 'draft',
		title: 'Building Nebula - Chapter 3',
		description: 'Working on it!'
	},
	{
		slug: 'nebula_chapter2',
		published: 'November 13, 2023',
		status: 'published',
		title: 'Building Nebula - Chapter 2',
		description: 'Starting to interact with WebAssembly modules',
    sequel: {
      url: '/blog/nebula_chapter3',
      label: "Stay tuned for chapter 3"
    },
		glossary: [
			{
				word: 'WebAssembly (Wasm)',
				description:
					'A binary instruction format for a stack-based virtual machine, designed as a portable target for high-level languages like C/C++ and Rust, for deployment on both web and server applications.'
			},
			{
				word: 'WebAssembly System Interface (Wasi)',
				description:
					'An interface for WebAssembly modules to interact with the underlying system, enabling system-level tasks in a standard, portable way.'
			},
			{
				word: 'Rust',
				description:
					'A programming language known for safety and performance, with a focus on safe concurrency, and syntactic similarities to C++.'
			},
			{
				word: 'Serverless FaaS Platform (Function as a Service)',
				description:
					'A cloud computing service allowing code execution in response to events, without managing underlying infrastructure.'
			},
			{
				word: 'wasmtime runtime',
				description:
					'A standalone runtime for executing WebAssembly, particularly outside of web browsers.'
			},
			{
				word: 'Fibonacci Sequence',
				description:
					'A numerical sequence where each number is the sum of the two preceding ones, typically starting with 0 and 1.'
			},
			{
				word: 'POSIX-like',
				description:
					'Refers to standards for maintaining compatibility between operating systems, defining application programming interfaces, command line shells, and utility interfaces.'
			},
			{
				word: 'CLI (Command Line Interface)',
				description:
					'A program that accepts text input to perform operating system functions and tasks.'
			},
			{
				word: 'stdin and stdout (Standard Input and Standard Output)',
				description:
					'Standard streams in Unix-like systems for input and output data, used in command-line interfaces and scripts.'
			},
			{
				word: 'Docker images',
				description:
					'Executable packages that include everything needed to run software, including code, runtime, libraries, environment variables, and config files.'
			},
			{
				word: 'wasm32-wasi target',
				description:
					'A compilation target in Rust for compiling programs into WebAssembly modules compatible with the Wasi interface.'
			},
			{
				word: 'Binary file',
				description:
					'A file stored in binary format, containing computer-readable data rather than human-readable text.'
			},
			{
				word: 'Macro in Rust (e.g., println! macro)',
				description:
					'Features in Rust for metaprogramming, allowing the writing of code that generates other code.'
			}
		]
	},
	{
		slug: 'nebula_chapter1',
		published: 'October 17, 2023',
		status: 'published',
		title: 'Building Nebula - Chapter 1',
		description: 'Building a prototype with Rust',
    sequel: {
        url: '/blog/nebula_chapter2',
        label: "Stay tuned for chapter 3"
    },
		glossary: [
			{
				word: 'FaaS (Function as a Service)',
				description:
					'A cloud computing service model where applications are developed, run, and managed as functions without the complexity of building and maintaining the infrastructure.'
			},
			{
				word: 'WebAssembly (Wasm)',
				description:
					'A binary instruction format for a stack-based virtual machine, designed for efficient and fast execution, widely used for web and server applications.'
			},
			{
				word: 'JavaScript',
				description:
					'A high-level, often just-in-time compiled language that conforms to the ECMAScript specification, widely used in web development.'
			},
			{
				word: 'Functional Programming',
				description:
					'A programming paradigm where programs are constructed by applying and composing functions, emphasizing immutability and pure functions.'
			},
			{
				word: 'Elixir',
				description:
					'A dynamic, functional language designed for building scalable and maintainable applications, known for its use in distributed systems.'
			},
			{
				word: 'Rust',
				description:
					'A multi-paradigm programming language focused on safety and performance, particularly safe concurrency, and offering high memory safety.'
			},
			{
				word: 'TypeScript',
				description:
					'A strict syntactical superset of JavaScript that adds static typing, designed to develop large applications and transcompiles to JavaScript.'
			},
			{
				word: 'WebAssembly Runtime',
				description:
					'The environment in which WebAssembly code executes, managing the execution of Wasm modules, memory, and other resources.'
			},
			{
				word: 'Wasmer, Wasmo, Wasmi, WasmEdge, Wasmtime',
				description:
					'Different WebAssembly runtimes, each offering unique features for executing Wasm modules in various environments.'
			},
			{
				word: 'Axum',
				description:
					'A web application framework written in Rust, designed for building efficient and reliable web apps with ease and flexibility.'
			},
			{
				word: 'Hyper',
				description:
					'A fast and safe HTTP implementation written in Rust, used as the foundation for building web servers and clients in Rust.'
			},
			{
				word: 'API (Application Programming Interface)',
				description:
					'A set of definitions and protocols for building and integrating application software, enabling communication between different software components.'
			},
			{
				word: 'i32',
				description:
					'A data type in the Rust programming language, representing a 32-bit signed integer'
			}
		]
	},
	{
		slug: 'nebula_chapter0',
		published: 'October 9, 2023',
		status: 'published',
		title: 'Building Nebula - Prologue',
		description: "My master thesis' backstory, building a FaaS prototype",
    sequel: {
      url: '/blog/nebula_chapter1',
      label: "Stay tuned for chapter 3"
    },
		glossary: [
			{
				word: 'Function-as-a-Service (FaaS)',
				description:
					'A cloud computing service that allows developers to write and deploy code without managing the underlying infrastructure, with functions executed in response to events.'
			},
			{
				word: 'WebAssembly (Wasm)',
				description:
					'A binary instruction format designed as a low-level, efficient target for compilation, enabling deployment across the web and other environments.'
			},
			{
				word: 'Docker',
				description:
					'A platform used to develop, ship, and run applications by using containerization technology, isolating applications from the underlying system.'
			},
			{
				word: 'WebAssembly System Interface (Wasi)',
				description:
					'A system interface for the WebAssembly platform, enabling Wasm modules to access system resources and services.'
			},
			{
				word: "Master's Thesis",
				description:
					"An advanced research project undertaken as part of completing a master's degree, involving a significant study on a particular subject."
			},
			{
				word: 'Containerization',
				description:
					'A technology that encapsulates an application and its dependencies into a container that can run on any computing environment.'
			},
			{
				word: 'Virtual Machines',
				description:
					'Software emulations of physical computers, providing the functionality needed to execute entire operating systems and applications.'
			},
			{
				word: 'Pure Functions',
				description:
					'Functions in programming that, for the same input, always return the same output and have no side-effects or dependencies on external state.'
			},
			{
				word: 'Cloud Computing',
				description:
					'The delivery of different services through the Internet, including data storage, servers, databases, networking, and software.'
			},
			{
				word: 'Programming and System Architecture',
				description:
					'A field of study focusing on the design and implementation of software and hardware systems, including their structure and interaction.'
			},
			{
				word: 'ServiceNow Consultant',
				description:
					'A professional specialized in implementing and managing the ServiceNow platform, which provides cloud-based IT service management solutions.'
			},
			{
				word: 'Fermyon',
				description:
					'A cloud company invested in the WebAssembly space, developing platforms and tools for running WebAssembly modules.'
			},
			{
				word: 'Cloud Technologies',
				description:
					'Technologies enabling cloud computing, which involves delivering various computing services over the Internet, such as storage, processing, and analytics.'
			}
		]
	},
	{
		slug: 'wasm-io-23',
		published: 'October 10, 2023',
		status: 'published',
		title: 'Surfing the third wave',
		description: '5 Things I learned about WebAssembly in Barcelona',
		canonicalUrl: 'https://jpro.no/blogg/item/wasm-io-2023',
		canonicalDate: 'May 11, 2023'
	}
] as BlogMeta
