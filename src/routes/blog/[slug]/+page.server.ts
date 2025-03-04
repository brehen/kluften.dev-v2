// src/routes/blog/[...slug].ts
import blog_meta from '$lib/data/blog_meta'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({  params }) => {
	const postIsPublished = blog_meta.find(({ slug }) => slug === params.slug)

	if (!postIsPublished) {
		throw error(404, {
			message:
				'<p>Blog post not found</p> <a href="/blog" class="anchor text-warning-600-300-token">Click here to go back</a>'
		})
	}

  console.log({postIsPublished})

	return {
		...postIsPublished
	}
}
