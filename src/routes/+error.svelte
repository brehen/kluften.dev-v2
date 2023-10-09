<script>
	import linux from '$lib/assets/linux-bordered.png'
	import gatsby from '$lib/assets/gatsby-bordered-box.png'
	import neko from '$lib/assets/neko-bordered-web.png'
	import { page } from '$app/stores'
</script>

<div class="flex justify-center items-center w-dscreen h-dscreen">
	<div class="flex flex-col gap-10 items-center">
		<h1 class="h1">404</h1>
		<span>{@html $page.error?.message ?? 'Something went wrong'}</span>
		<div class="flex overflow-hidden gap-4 rounded-lg bg-tertiary-300">
			<img
				src={gatsby}
				alt="Gato numero uno"
				class="w-24 h-24 md:w-40 md:h-40 motion-safe:animate-pulse"
			/>
			<img
				src={neko}
				alt="Gato numero tres"
				class="w-24 h-24 md:w-40 md:h-40 motion-safe:animate-pulse"
			/>
			<img
				src={linux}
				alt="Gato numero uno"
				class="w-24 h-24 md:w-40 md:h-40 motion-safe:animate-pulse"
			/>
		</div>
	</div>
</div>
