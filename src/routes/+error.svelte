<script>
	import linux from '$lib/assets/linux-bordered.png'
	import gatsby from '$lib/assets/gatsby-bordered-box.png'
	import neko from '$lib/assets/neko-bordered-web.png'
</script>

<div class="flex justify-center items-center w-dscreen h-dscreen">
	<div class="flex flex-col gap-10 items-center">
		<h1 class="h1">404</h1>
		<span>There be no blog here yet, have some pets</span>
		<div class="flex overflow-hidden gap-4 rounded-lg bg-tertiary-300">
			<img src={gatsby} alt="Gato numero uno" class="w-24 h-24 md:w-40 md:h-40" />
			<img src={neko} alt="Gato numero tres" class="w-24 h-24 md:w-40 md:h-40" />
			<img src={linux} alt="Gato numero uno" class="w-24 h-24 md:w-40 md:h-40" />
		</div>
	</div>
</div>
