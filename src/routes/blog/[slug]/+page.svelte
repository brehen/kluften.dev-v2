<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import {
		setCurrentTagline,
		setShouldSwapNavbar,
		updateNavbarLimit
	} from '$lib/stores/navbarStore'
	import SvelteMarkdown from 'svelte-markdown'
	import type { PageData } from './$types'
	import Feedback from '$lib/components/feedback.svelte'

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

<section
	class="prose py-10 prose-h1:text-tertiary-600-300-token prose-h2:text-tertiary-600-300-token prose-a:text-warning-600-300-token"
	bind:this={section}
>
	<SvelteMarkdown source={data.content} />
	<hr />
	<Feedback />
	<hr />
</section>

<style>
	:global(section > p > img) {
		margin-inline: auto;
	}
</style>
