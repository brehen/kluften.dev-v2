<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton'

	export let glossary: {
		word: string
		description: string
	}[]
</script>

{#if glossary}
	<div class="rounded-lg border border-l-8 border-primary-300 bg-slate-300 dark:marker:text-black">
		<Accordion>
			<AccordionItem>
				<svelte:fragment slot="summary">
					<span class="text-2xl mt-2 relative block">Glossary</span>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<ol>
						{#each glossary as item (item.word)}
							<li><b>{item.word}</b>: {item.description}</li>
						{/each}
					</ol>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</div>
{/if}
