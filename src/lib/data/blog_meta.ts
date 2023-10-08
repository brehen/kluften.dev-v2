type BlogMeta = Record<
	string,
	{
		published: string
		description: string
	}
>

export default {
	nebula_chapter0: {
		published: 'October 8, 2023',
		description: 'Detailing the background for my master thesis project Nebula'
	}
} as BlogMeta
