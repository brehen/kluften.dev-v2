<script>
	import linux from '$lib/assets/linux-1.png'
	import gatsby from '$lib/assets/gatsby-1.png'
	import neko from '$lib/assets/neko-traced.png'

	import Hero from '$lib/components/hero.svelte'
	import AboutMe from '$lib/components/aboutme.svelte'
	import Proficiences from '$lib/components/proficiencies.svelte'
	import Experience from '$lib/components/experience.svelte'
	import Education from '$lib/components/education.svelte'
</script>

<div class="flex flex-col gap-12 mb-8 w-screen max-w-[2560px]">
	<Hero />
	<AboutMe />
	<Proficiences />
	<Education />
	<Experience />
</div>
