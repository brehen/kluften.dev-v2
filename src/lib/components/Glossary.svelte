<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte'

	export let glossary: {
		word: string
		description: string
	}[]
</script>

{#if glossary}
	<div class="rounded-lg border border-l-8 border-primary-300 bg-slate-300 dark:marker:text-black">
		<Accordion collapsible>
			<Accordion.Item value="glossary">
				{#snippet control()}
					<span class="text-lg">During my time I've helped these customers:</span>
					<span class="text-2xl mt-2 relative block">Glossary</span>
				{/snippet}
				{#snippet panel()}
					<ol>
						{#each glossary as item (item.word)}
							<li><b>{item.word}</b>: {item.description}</li>
						{/each}
					</ol>
				{/snippet}
			</Accordion.Item>
		</Accordion>
	</div>
{/if}
