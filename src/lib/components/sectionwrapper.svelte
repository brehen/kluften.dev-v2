<script lang="ts">
	import { onMount } from 'svelte'

	export let maxW = 'max-w-prose'
	let element: HTMLElement
	let visible = false

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visible = true
					observer.disconnect() // Only animate once
				}
			},
			{ threshold: 0.1 }
		)

		if (element) {
			observer.observe(element)
		}

		return () => observer.disconnect()
	})
</script>

<section class="flex justify-center w-full" bind:this={element}>
	<div class={'flex p-1.5 w-full md:w-3/4 md:rounded-xl ' + maxW}>
		<div
			class="overflow-hidden w-full rounded-2xl border-2 border-b-[10px] border-l-[17px] border-primary-900 bg-white dark:bg-surface-700 transition-all duration-300 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-10 opacity-0'}"
		>
			<slot />
		</div>
	</div>
</section>
