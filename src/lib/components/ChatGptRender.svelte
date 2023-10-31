<script lang="ts">
	import { onMount } from 'svelte'
	import SvelteMarkdown from 'svelte-markdown'

	export let text: string

	let selected: 'first' | 'second' = 'first'

	let block: HTMLDivElement
	let first: HTMLParagraphElement | null
	let firstHeight: number | undefined
	let secondHeight: number | undefined
	let second: HTMLParagraphElement | null
	let wrapper: HTMLSpanElement | null
	function swapParagraph() {
		if (first && second && wrapper) {
			if (selected === 'first') {
				second.classList.remove('hide')
				first.classList.add('hide')
				selected = 'second'
				wrapper.style.setProperty('max-height', `${secondHeight}px`)
			} else {
				first.classList.remove('hide')
				second.classList.add('hide')
				selected = 'first'
				wrapper.style.setProperty('max-height', `${firstHeight}px`)
			}
		}
	}
	onMount(() => {
		first = block.querySelector('#first')
		firstHeight = first?.clientHeight
		second = block.querySelector('#second')
		secondHeight = second?.clientHeight
		wrapper = block.querySelector('#wrapper')
		if (wrapper && firstHeight) {
			wrapper.style.setProperty('max-height', `${firstHeight}px`)
		}
		if (first) {
			first.classList.remove('invisible')
		}
	})
</script>

<div class="relative mb-8" bind:this={block}>
	<SvelteMarkdown source={text} />

	<div class="flex justify-end pt-4">
		<button on:click={swapParagraph} class="bg-pink-300 text-stone-900 rounded-lg px-4 py-2">
			♻️ Regenerate
		</button>
	</div>
</div>

<style>
	:global(#first, #second) {
		transition: all 0.3s ease-in-out;
		transform: translateY(0%);
	}
	:global(#wrapper) {
		transition: all 0.3s ease-in-out;
	}
	:global(#first) {
		transform: translateY(-100%);
		opacity: 1;
	}
	:global(#first.hide) {
		transform: translate3d(101%, 101%, 100%);
		opacity: 0;
	}
	:global(#second) {
		transform: translateY(0%);
	}
	:global(#second.hide) {
		transform: translateY(-100%);
	}
</style>
