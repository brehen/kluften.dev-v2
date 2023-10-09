// src/routes/blog/[...slug].ts
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ fetch, params }) => {
	const post = await fetch(`/blog-posts/${params.slug}.md`)
	const content = await post.text()

	return {
		content
	}
}
