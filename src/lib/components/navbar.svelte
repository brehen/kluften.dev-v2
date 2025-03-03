<script lang="ts">
	import Logo from '$lib/assets/svgs/logo.svelte'
	import { fly } from 'svelte/transition'

	import {
		whenToSwapNavBar,
		shouldSwapNavbarStore,
		currentTaglineStore
	} from '$lib/stores/navbarStore'

	let onSide = false

	shouldSwapNavbarStore.subscribe((should) => {
		if (should) {
			window.addEventListener('scroll', () => {
				if (window.scrollY > whenToSwapNavBar) {
					onSide = true
				} else {
					onSide = false
				}
			})
		}
	})

	let shouldSwap = false
	$: shouldSwap = $shouldSwapNavbarStore

	let tagline = ''
	$: tagline = $currentTaglineStore
</script>

<header>
	<div
		class={[
			'fixed z-[999] w-full flex justify-center items-end h-20 px-4 md:px-8 py-4 transition-all',
			onSide ? 'bg-surface-100-900 md:!bg-transparent' : 'bg-surface-100-900'
		].join(' ')}
	>
		<div class="flex items-end justify-between w-full max-w-5xl relative">
			<div class="relative">
				<a href="/" class="flex gap-4 items-end !text-primary-900-50-token leading-none">
					<Logo />
					{#if !onSide}
						kluften.dev
					{/if}
				</a>
				{#if onSide && shouldSwap}
					<div class="md:rotate-90 absolute whitespace-nowrap vertical-text pb-1 text-xl">
						<div class="relative">
							{#key tagline}
								<p
									in:fly={{ y: 30 }}
									out:fly={{ y: -30 }}
									class="absolute bottom-0 left-12 md:left-8"
								>
									{tagline}
								</p>
							{/key}
						</div>
					</div>
				{/if}
			</div>
			<!-- <nav class="flex gap-8 justify-between"> -->
			<!-- 	<a href="/blog" class="!text-tertiary-800-200 leading-4">blog</a> -->
			<!-- </nav> -->
		</div>
	</div>
</header>

<style>
	.vertical-text {
		transform-origin: bottom left;
	}
</style>
