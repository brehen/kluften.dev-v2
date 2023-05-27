<script>
	// Your selected Skeleton theme:
	import '../kluften.css'
	import { autoModeWatcher } from '@skeletonlabs/skeleton'
	// This contains the bulk of Skeletons required styles:
	// NOTE: this will be renamed skeleton.css in the v2.x release.
	import '@skeletonlabs/skeleton/styles/skeleton.css'

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.css'
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
	{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
</svelte:head>
<slot />
