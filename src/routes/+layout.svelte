<script>
	// Your selected Skeleton theme:
	import '../kluften.css'
	// This contains the bulk of Skeletons required styles:
	// NOTE: this will be renamed skeleton.css in the v2.x release.
	import '@skeletonlabs/skeleton/styles/skeleton.css'

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.css'
	import '../keyframes.css'
	import Navbar from '$lib/components/navbar.svelte'
	import Footer from '$lib/components/footer.svelte'
	import { page } from '$app/stores'
</script>

<svelte:head>
	<link
		rel="preload"
		href="/fonts/Overpass-VariableFont_wght.ttf"
		as="font"
		type="font/ttf"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/Overpass-Italic-VariableFont_wght.ttf"
		as="font"
		type="font/ttf"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/Poppins-Light.ttf"
		as="font"
		type="font/ttf"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/Poppins-Medium.ttf"
		as="font"
		type="font/ttf"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/Poppins-Regular.ttf"
		as="font"
		type="font/ttf"
		crossorigin="anonymous"
	/>
</svelte:head>
<Navbar />
<slot />
{#if $page.url.pathname !== '/'}
	<Footer />
{/if}
