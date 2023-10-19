type BlogMeta = {
	slug: string
	status: 'published' | 'draft'
	title: string
	published: string
	description: string
	canonicalUrl?: string
}[]

export default [
	{
		slug: 'nebula_chapter2',
		published: '',
		status: 'draft',
		title: 'Building Nebula - Chapter 2',
		description: 'Working on it!'
	},
	{
		slug: 'nebula_chapter1',
		published: 'October 17, 2023',
		status: 'published',
		title: 'Building Nebula - Chapter 1',
		description: 'Building a prototype with Rust'
	},
	{
		slug: 'nebula_chapter0',
		published: 'October 9, 2023',
		status: 'published',
		title: 'Building Nebula - Prologue',
		description: "My master thesis' backstory, building a FaaS prototype"
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
