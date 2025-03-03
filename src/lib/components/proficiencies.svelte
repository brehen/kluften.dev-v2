<script lang="ts">
	import SectionWrapper from '$lib/components/sectionwrapper.svelte'
	const profs = [
		{
			heading: 'Programming languages',
			subHeading: 'TypeScript & Rust'
		},
		{
			heading: 'Frameworks',
			subHeading: 'React, Svelte, NextJS, Remix, SvelteKit & htmx'
		},
		{
			heading: 'State management',
			subHeading: 'React-Query & Zustand'
		},
		{
			heading: 'Test frameworks',
			subHeading: 'Vitest, RTL & Playwright'
		}
	]
</script>

<SectionWrapper>
	<div class="w-full prose prose-h2:!text-primary-900">
		<h2 class="section-title noise bg-tertiary-500">Technical Proficiencies</h2>
		<div class="pb-3 px-6 text-xl">
			<p class="mb-2 text-tertiary-100">These days, I love these the most:</p>
			<ul class="p-0 !m-0 list-none">
				{#each profs as prof (prof.heading)}
					<li class="p-0">
						<strong class="text-white">{prof.heading}: </strong>
						<i>{prof.subHeading}</i>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</SectionWrapper>
