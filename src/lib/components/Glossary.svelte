<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte'

	export let glossary: {
		word: string
		description: string
	}[]
</script>

{#if glossary}
	<div
		class="rounded-lg border w-screen max-w-xl border-l-8 border-primary-300 bg-slate-300 !text-primary-900 marker:!text-primary-900 accord"
	>
		<Accordion collapsible>
			<Accordion.Item value="glossary">
				{#snippet control()}
					<span class="text-2xl">Glossary</span>
				{/snippet}
				{#snippet panel()}
					<ul>
						{#each glossary as item (item.word)}
							<li><b>{item.word}</b>: {item.description}</li>
						{/each}
					</ul>
				{/snippet}
			</Accordion.Item>
		</Accordion>
	</div>
{/if}

<style>
	.accord :global {
		button {
			background: transparent !important;
			color: black !important;
			cursor: pointer;
		}
		h3 {
			margin: 0;
		}
		a {
			color: oklch(62.45% 0.22 355.9deg);
		}
	}
</style>
