<script lang="ts">
	import { get } from 'radash'
	import type { PageData } from './$types'
	import blogMeta from '$lib/data/blog_meta'

	export let data: PageData

	const posts = data.props.posts
	const getBlogMeta = (post: string) =>
		get(blogMeta, post, {
			description: 'Description coming...',
			published: ''
		})
</script>

<div class="prose min-h-screen">
	<h1>Marius's latest posts</h1>

	{#each posts as post}
		<a class="h2" href={`/blog/${post.slug}`}>{post.title}</a>
		<p>
			{[getBlogMeta(post.slug).published, getBlogMeta(post.slug).description]
				.filter(Boolean)
				.join(' - ')}
		</p>
	{/each}
</div>
