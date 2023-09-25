<script>
	import Logo from '$lib/assets/svgs/logo.svelte'
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton'
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a href="/" class="flex gap-2 items-center !text-primary-900-50-token">
			<Logo />
			kluften.dev
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="flex !text-primary-900-50-token gap-8">
			<a href="/blog">blog</a>
			<LightSwitch />
		</div>
	</svelte:fragment>
</AppBar>

<style>
	:global(.app-bar) {
		@apply fixed w-full z-[999];
	}
</style>
