<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import {
		setCurrentTagline,
		setShouldSwapNavbar,
		updateNavbarLimit
	} from '$lib/stores/navbarStore'
	import SvelteMarkdown from 'svelte-markdown'
	import type { PageData } from './$types'
	import neko from '$lib/assets/neko-smile.png'
	import gatsby from '$lib/assets/gatsby-hmm.png'

	let section: HTMLElement
	export let data: PageData

	let title: string

	onMount(() => {
		updateNavbarLimit(10)
		setShouldSwapNavbar(true)

		title = section.querySelector('h1')?.innerText || ''
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
	<hr />
</section>

<style>
	:global(section > p > img) {
		margin-inline: auto;
	}
</style>
