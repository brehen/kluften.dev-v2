// src/routes/blog/[...slug].ts
import type { PageServerLoad } from './$types'
import blog_meta from '$lib/data/blog_meta'
import { error } from '@sveltejs/kit'

export const load: PageServerLoad = async ({ fetch, params }) => {
	const postIsPublished = blog_meta.find(({ slug }) => slug === params.slug)

	if (!postIsPublished) {
		throw error(404, {
			message:
				'<p>Blog post not found</p> <a href="/blog" class="anchor text-warning-600-300-token">Click here to go back</a>'
		})
	}
	const post = await fetch(`/blog-posts/${params.slug}.md`)
	const content = await post.text()

	return {
		content,
		...postIsPublished
	}
}
