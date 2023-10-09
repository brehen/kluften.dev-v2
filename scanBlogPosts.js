import fs from 'fs'
import path from 'path'

const directoryPath = path.join(process.cwd(), 'static/blog-posts')

async function processFiles() {
	try {
		const files = await fs.promises.readdir(directoryPath)

		const posts = files.map((file) => {
			const filePath = path.join(directoryPath, file)
			const content = fs.readFileSync(filePath, 'utf-8')
			const firstLine = content.split('\n')[0]
			const title = firstLine.replace(/^#\s*/, '') // Remove '# ' from the start of the first line
			const slug = path.basename(file, '.md')
			return { title, slug }
		})

		await fs.promises.writeFile('static/blog-posts.json', JSON.stringify(posts), 'utf8')
	} catch (err) {
		console.log('Unable to process files:', err)
	}
}

processFiles()
