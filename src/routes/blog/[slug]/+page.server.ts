// src/routes/blog/[...slug].ts
import fs from 'fs'
import path from 'path'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = ({ params }) => {
	const filePath = path.join(process.cwd(), 'static/blog-posts', `${params.slug}.md`)

	if (!fs.existsSync(filePath)) {
		return { status: 404, error: new Error('Post not found') }
	}

	const content = fs.readFileSync(filePath, 'utf-8')

	return {
		props: {
			content
		}
	}
}
