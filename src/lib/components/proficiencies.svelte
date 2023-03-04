<script lang="ts">
	import SectionWrapper from '$lib/components/sectionwrapper.svelte'
	const profs = [
		{
			heading: 'Programming languages',
			subHeading: 'JavaScript/TypeScript, Elixir, Rust'
		},
		{
			heading: 'Frameworks',
			subHeading: 'React, NextJS, Gatsby, Svelte, Phoenix'
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
	<div
		class="w-full max-w-none prose prose-h2:text-accent-alt prose-h2:font-fancy"
	>
		<h2>Technical Proficiencies</h2>
		<div class="flex text-xl">
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
