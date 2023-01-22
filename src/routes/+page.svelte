<script>
	import linux from '$lib/assets/linux-1.png'
	import gatsby from '$lib/assets/gatsby-1.png'
	import neko from '$lib/assets/neko-traced.png'

	import Hero from '$lib/components/hero.svelte'
	import AboutMe from '$lib/components/aboutme.svelte'
	import Proficiences from '$lib/components/proficiencies.svelte'
	import Experience from '$lib/components/experience.svelte'
</script>

<main class="flex relative">
	<div class="hidden relative flex-1 3xl:block">
		<div class="flex sticky top-4 left-4 flex-col justify-between w-full h-full max-h-screen">
			<img src={linux} alt="Gato numero uno" />
			<img src={neko} alt="Gato numero tres" />
		</div>
	</div>
	<div class="w-screen max-w-[2560px]">
		<Hero />
		<AboutMe />
		<Proficiences />
		<Experience />
	</div>
	<div class="hidden relative flex-1 3xl:block">
		<div class="flex sticky top-4 left-4 flex-col justify-between w-full h-full max-h-screen">
			<img src={gatsby} alt="Gato numero dos" class="w-inherit" />
			<img src={neko} alt="Gato numero tres" class="rotate-y-180" />
		</div>
	</div>
</main>
