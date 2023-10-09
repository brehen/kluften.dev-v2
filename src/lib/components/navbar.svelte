<script lang="ts">
	import Logo from '$lib/assets/svgs/logo.svelte'
	import { LightSwitch } from '@skeletonlabs/skeleton'
	import { fade, fly } from 'svelte/transition'

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
			'fixed z-[999] w-full flex justify-center h-nav px-4 md:px-8 py-4 transition-all',
			onSide ? 'bg-surface-100-800-token md:!bg-transparent' : 'bg-surface-100-800-token'
		].join(' ')}
	>
		<div class="flex items-center justify-between w-full max-w-5xl">
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
		</div>
	</div>
	<nav
		class="border-t-black border-t-2 md:border-none fixed z-[999] w-full md:w-fit bottom-0 md:bottom-[unset] md:top-0 md:right-0 flex justify-end !text-warning-600-300-token p-4 bg-surface-100-800-token gap-8 text-xl"
	>
		<a href="/blog">blog</a>
		<LightSwitch />
	</nav>
</header>

<style>
	.vertical-text {
		transform-origin: bottom left;
	}
</style>
