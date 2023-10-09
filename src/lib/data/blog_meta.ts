type BlogMeta = {
	slug: string
	title: string
	published: string
	description: string
}[]

export default [
	{
		slug: 'nebula_chapter1',
		published: '',
		title: 'Building Nebula - Chapter 1',
		description: 'Work in Progress'
	},
	{
		slug: 'nebula_chapter0',
		published: 'October 9, 2023',
		title: 'Building Nebula - Prologue',
		description: "My master thesis' backstory, building a FaaS prototype"
	}
] as BlogMeta
