<script>
	// Your selected Skeleton theme:

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.css'
	import '../kluften.css'

	import '../keyframes.css'
	import { dev } from '$app/environment'
	import { inject } from '@vercel/analytics'
	import Navbar from '$lib/components/navbar.svelte'
	import linux from '$lib/assets/linux-1.png'
	import gatsby from '$lib/assets/gatsby-1.png'
	import neko from '$lib/assets/neko-traced.png'

	inject({ mode: dev ? 'development' : 'production' })

	let { children } = $props()
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
<main class="flex relative">
	<div class="hidden relative flex-1 3xl:block">
		<div class="flex sticky top-4 left-4 flex-col justify-between w-full h-full max-h-screen">
			<img src={linux} alt="Gato numero uno" />
			<img src={neko} alt="Gato numero tres" />
		</div>
	</div>
	<div
		class="flex flex-col items-center justify-center pt-20 px-8 w-screen max-w-[2560px] min-h-[100dvh]"
	>
		{@render children()}
	</div>
	<div class="hidden relative flex-1 3xl:block">
		<div class="flex sticky top-4 left-4 flex-col justify-between w-full h-full max-h-screen">
			<img src={gatsby} alt="Gato numero dos" class="w-inherit" />
			<img src={neko} alt="Gato numero tres" class="rotate-y-180" />
		</div>
	</div>
</main>
