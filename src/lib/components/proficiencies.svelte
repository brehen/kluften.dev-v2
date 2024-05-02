<script lang="ts">
	import SectionWrapper from '$lib/components/sectionwrapper.svelte'
	const profs = [
		{
			heading: 'Programming languages',
			subHeading: 'JavaScript/TypeScript, Elixir, Rust'
		},
		{
			heading: 'Frameworks',
			subHeading: 'React, NextJS, Gatsby, Svelte, Phoenix, Actix'
		},
		{
			heading: 'State management',
			subHeading: 'React-Query, Zustand, Redux'
		},
		{
			heading: 'Test frameworks',
			subHeading: 'Jest, Vitest, RTL, Playwright, Cypress'
		},
		{
			heading: 'Web services',
			subHeading: 'REST, GraphQL'
		}
	]
</script>

<SectionWrapper>
	<div class="w-full prose prose-h2:!text-primary-900 prose-h2:font-fancy">
		<h2 class="section-title bg-tertiary-500">Technical Proficiencies</h2>
		<div class="flex py-3 px-6 text-xl">
			<ul class="p-0 m-0 list-none">
				{#each profs as prof}
					<li class="p-0">
						<strong>{prof.heading}: </strong>
						<i>{prof.subHeading}</i>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</SectionWrapper>
