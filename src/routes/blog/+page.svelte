<script lang="ts">
	import blogMeta from '$lib/data/blog_meta'
</script>

<div class="prose min-h-screen p-nav mt-40">
	<h1 class="text-5xl text-primary-500 dark:text-white !h1">Marius's latest posts</h1>

	{#each blogMeta as post (post.slug)}
		<a
			class="h3 no-underline font-bold dark:text-ink-300 text-tertiary-600-300-token"
			href={`/blog/${post.slug}`}>{post.title}</a
		>
		<p>
			{[post.published, post.description].filter(Boolean).join(' - ')}
		</p>
	{/each}
</div>
