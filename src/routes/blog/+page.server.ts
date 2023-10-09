// src/routes/blog/index.ts
import fs from 'fs'
import path from 'path'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const blogDir = path.join(process.cwd(), 'blog-posts.json')
	const files = await fs.promises.readdir(blogDir)
	const posts = files.map((file) => {
		const filePath = path.join(blogDir, file)
		const content = fs.readFileSync(filePath, 'utf-8')
		const firstLine = content.split('\n')[0]
		const title = firstLine.replace(/^#\s*/, '') // Remove '# ' from the start of the first line
		const slug = path.basename(file, '.md')
		return { title, slug }
	})
	return {
		props: {
			posts
		}
	}
}
