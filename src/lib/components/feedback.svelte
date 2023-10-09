<script lang="ts">
	import neko from '$lib/assets/neko-smile.png'
	import gatsby from '$lib/assets/gatsby-hmm.png'
	import { onMount } from 'svelte'

	let title: string

	onMount(() => {
		title = document.querySelector('h1')?.innerText || ''
	})
</script>

<div class="flex items-start justify-center gap-4">
	<img src={neko} alt="" class="w-20 my-0" />
	<div>
		<p class="mb-0 mt-8">Got any feedback?</p>
		<p class="mt-0">
			I'd love to hear from you here:
			<a href={`mailto:feedback@kluften.dev?subject=Feedback ${title}`}> feedback@kluften.dev </a>
		</p>
	</div>
	<img src={gatsby} alt="" class="w-24 my-0 self-center" />
</div>
