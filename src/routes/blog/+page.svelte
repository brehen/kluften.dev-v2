<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown'
	import linux from '$lib/assets/linux-1.png'
	import gatsby from '$lib/assets/gatsby-1.png'
	import neko from '$lib/assets/neko-traced.png'
	import blogPost from '/Users/mariuskluften/projects/uio/master-thesis/docs/blog_posts/nebula_part1.md?raw'
	import { onDestroy, onMount } from 'svelte'
	import {
		setCurrentTagline,
		setShouldSwapNavbar,
		updateNavbarLimit
	} from '$lib/stores/navbarStore'

	let section: HTMLElement

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

<main class="flex relative">
	<div class="hidden relative flex-1 3xl:block">
		<div class="flex sticky top-4 left-4 flex-col justify-between w-full h-full max-h-screen">
			<img src={linux} alt="Gato numero uno" />
			<img src={neko} alt="Gato numero tres" />
		</div>
	</div>
	<div class="flex justify-center pt-nav px-8 w-screen max-w-[2560px]" bind:this={section}>
		<section class="prose pt-10 pb-40">
			<SvelteMarkdown source={blogPost} />
		</section>
	</div>
	<div class="hidden relative flex-1 3xl:block">
		<div class="flex sticky top-4 left-4 flex-col justify-between w-full h-full max-h-screen">
			<img src={gatsby} alt="Gato numero dos" class="w-inherit" />
			<img src={neko} alt="Gato numero tres" class="rotate-y-180" />
		</div>
	</div>
</main>
