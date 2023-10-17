<script lang="ts">
	import neko from '$lib/assets/neko-smile.png'
	import gatsby from '$lib/assets/gatsby-hmm.png'
	import { onMount } from 'svelte'

	let title: string

	onMount(() => {
		title = document.querySelector('h1')?.innerText || ''
	})
</script>

<div class="flex items-start justify-around gap-4 w-full">
	<img src={neko} alt="" class="w-20 my-0" />
	<div class="not-prose">
		<p class="my-4 text-center">Got any feedback?</p>
		<a
			class="px-3 py-2 bg-warning-300 rounded-md dark:!text-black not-prose no-underline"
			href={`mailto:feedback@kluften.dev?subject=Feedback ${title}`}
		>
			I'd love to hear from you!
		</a>
	</div>
	<img src={gatsby} alt="" class="w-24 my-0 self-center" />
</div>
