<script lang="ts">
	import { inview } from 'svelte-inview'
	import type { Options } from 'svelte-inview'
	import { slide } from 'svelte/transition'

	let isInView = false
	const options: Options = {
		rootMargin: '50px'
	}

	/* 	use:inview={options}
	on:change={(event) => {
		const { inView } = event.detail
		console.log('hey')
		isInView = inView
	}}
  */
</script>

<section class="flex justify-center w-full" in:slide>
	<div class="flex p-1.5 w-full max-w-3xl shadow-lg md:w-3/4 md:rounded-xl bg-accent">
		<div class="p-12 px-8 w-full bg-white rounded-lg">
			<slot />
		</div>
	</div>
</section>
