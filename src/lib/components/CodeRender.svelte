<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton'

	export let text: string
	export let lang: string
</script>

<div class="not-prose">
	<CodeBlock language={lang} code={text} lineNumbers />
</div>
