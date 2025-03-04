import type { PageLoad } from "./$types";
import { error } from '@sveltejs/kit'

export const load: PageLoad = async ({ params }) => {
  try {
    // Dynamically import the markdown file based on the slug
    const post = await import(`../../../posts/${params.slug}.md`);
    
    return {
      content: post.default,
      metadata: post.metadata || {}
    };
  } catch (_e) {
		throw error(404, {
			message:
				'<p>Blog post not found</p> <a href="/blog" class="anchor text-warning-600-300-token">Click here to go back</a>'
		})
  }
}
