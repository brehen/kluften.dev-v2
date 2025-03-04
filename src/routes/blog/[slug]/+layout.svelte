<script lang="ts">
	import Footer from '$lib/components/footer.svelte'
	import 'highlight.js/styles/github-dark.css'
	import { onMount } from 'svelte'
	import 'prism-themes/themes/prism-gruvbox-dark.css'

	import {
		setCurrentTagline,
		setShouldSwapNavbar,
		updateNavbarLimit
	} from '$lib/stores/navbarStore'
	import type { LayoutProps } from './$types'
	import Feedback from '$lib/components/feedback.svelte'
	import Glossary from '$lib/components/Glossary.svelte'

	let { data, children }: LayoutProps = $props()

	let section: HTMLElement
	let sections: {
		tagline: string
		offset: number
	}[]

	const onScroll = () => {
		if (window.scrollY % 50 === 0) console.log(sections)
		const currentScrollY = window.scrollY
		const triggerPoint = currentScrollY + window.innerHeight / 2

		const currentSection = sections.find((section, index) => {
			const nextSection = sections[index + 1]
			return nextSection
				? triggerPoint >= section.offset && triggerPoint < nextSection.offset
				: triggerPoint >= section.offset
		})

		if (currentSection) {
			setCurrentTagline(currentSection.tagline)
		}
	}

	onMount(() => {
		updateNavbarLimit(10)
		setShouldSwapNavbar(true)

		if (section) {
			const h2s = Array.from(section.querySelectorAll('h2'))
			const h3s = Array.from(section.querySelectorAll('h3'))
			const headings = [...h2s, ...h3s]
			sections = headings.map((h) => ({
				tagline: h.innerText,
				offset: h.offsetTop
			}))

			window.addEventListener('scroll', onScroll)
			return () => {
				setCurrentTagline('')
				window.removeEventListener('scroll', onScroll)
				setShouldSwapNavbar(false)
			}
		}
	})

	console.log({ data })
</script>

<section
	bind:this={section}
	class="prose prose-blockquote:text-white prose-blockquote:border-tertiary-400"
>
	{@render children()}
	{#if data.sequel}
		<a href={data.sequel.url} data-sveltekit-reload>{data.sequel.label}</a>
	{/if}
</section>
<section class="w-full max-w-lg my-10 flex flex-col gap-20">
	<hr />
	<Feedback />
	<hr />

	{#if data.glossary}
		<Glossary glossary={data.glossary} />
	{/if}
</section>

<Footer />
