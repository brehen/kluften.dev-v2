<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton'
	import ChatGptRender from './ChatGptRender.svelte'

	export let text: string
	export let lang: string
</script>

<div class="not-prose">
	{#if lang === 'chatgpt'}
		<ChatGptRender {text} />
	{:else}
		<CodeBlock language={lang} code={text} lineNumbers />
	{/if}
</div>
