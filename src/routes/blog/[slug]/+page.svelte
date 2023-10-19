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
	import CodeRender from '$lib/components/CodeRender.svelte'
	import { page } from '$app/stores'
	import { dev } from '$app/environment'
	export let data: PageData

	let isProd = !dev
	let showArticleContent = (isProd && data.status === 'published') || !isProd

	const insertDate = (markup: string) => {
		const [first, ...rest] = markup.split('\n')

		return [first, '', `${data.published}`, ...rest].join('\n')
	}

	const content = insertDate(data.content)

	let section: HTMLElement
	let onScroll: () => void

	const updateSectionsAndScrolls = () => {
		const h2s = Array.from(section.querySelectorAll('h2'))
		const h3s = Array.from(section.querySelectorAll('h3'))
		const headings = [...h2s, ...h3s]
		const sections = headings.map((h) => ({
			tagline: h.innerText,
			offset: h.offsetTop
		}))

		onScroll = () => {
			// if (window.scrollY % 50 === 0) console.log(section)
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
	}

	onMount(() => {
		updateNavbarLimit(10)
		setShouldSwapNavbar(true)

		updateSectionsAndScrolls()

		window.addEventListener('scroll', onScroll)
		return () => {
			window.removeEventListener('scroll', onScroll)
			setShouldSwapNavbar(false)
		}
	})

	$: if (section) {
		updateSectionsAndScrolls()
	}
</script>

<svelte:head>
	{#if data.canonicalUrl}
		<link type="canonical" href={data.canonicalUrl} />
	{/if}
</svelte:head>
<section
	class="prose py-10
  prose-a:text-warning-600-300-token dark:marker:text-white marker:text-slate-800"
	id={$page.url.toString()}
	bind:this={section}
>
	<SvelteMarkdown
		source={showArticleContent ? content : '# Working on it!'}
		renderers={{
			code: CodeRender
		}}
	/>
	<hr />
	<Feedback />
	<hr />
</section>

<style>
	:global(section > p > img) {
		margin-inline: auto;
	}

	:global(.prose h1, h2, h3, h4) {
		@apply text-tertiary-600-300-token;
	}
</style>
