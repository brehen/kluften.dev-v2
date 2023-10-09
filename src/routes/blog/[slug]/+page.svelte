<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import {
		setCurrentTagline,
		setShouldSwapNavbar,
		updateNavbarLimit
	} from '$lib/stores/navbarStore'
	import SvelteMarkdown from 'svelte-markdown'
	import type { PageData } from './$types'

	let section: HTMLElement
	export let data: PageData

	onMount(() => {
		updateNavbarLimit(10)
		setShouldSwapNavbar(true)

		const headings = Array.from(section.querySelectorAll('h2'))
		const sections = headings.map((h2) => ({
			tagline: h2.innerText,
			offset: h2.offsetTop
		}))

		window.addEventListener('scroll', () => {
			const currentScrollY = window.scrollY
			const triggerPoint = currentScrollY + window.innerHeight / 2 // Adjust this to control when the update triggers

			const currentSection = sections.find((section, index) => {
				const nextSection = sections[index + 1]
				return nextSection
					? triggerPoint >= section.offset && triggerPoint < nextSection.offset
					: triggerPoint >= section.offset
			})

			if (currentSection) {
				setCurrentTagline(currentSection.tagline)
			}
		})
	})

	onDestroy(() => {
		setShouldSwapNavbar(false)
	})
</script>

<section class="prose pt-10 pb-40" bind:this={section}>
	<SvelteMarkdown source={data.props.content} />
</section>

<style>
	:global(section > p > img) {
		margin-inline: auto;
	}
</style>