<script lang="ts">
	import blogMeta from '$lib/data/blog_meta'

	function getDomain(url?: string): string | null {
		if (!url) return null
		const match = url.match(/https?:\/\/([^\/]+)/i)
		if (match && match[1]) {
			return match[1].split('.').slice(-2).join('.')
		}
		return null
	}
</script>

<div class="prose min-h-screen p-nav">
	<h1 class="text-5xl text-primary-500 dark:text-white !h1">Marius's latest posts</h1>

	{#each blogMeta as post}
		<a
			class="h3 no-underline font-bold dark:text-ink-300 text-tertiary-600-300-token"
			href={`/blog/${post.slug}`}>{post.title}</a
		>
		{#if getDomain(post.canonicalUrl)}
			<p class="my-0">
				Originally published @
				<a href={post.canonicalUrl}>{getDomain(post.canonicalUrl)}</a>
			</p>
		{/if}
		<p>
			{[post.published, post.description].filter(Boolean).join(' - ')}
		</p>
	{/each}
</div>
