<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData

	const Content = data.content
</script>

{#if Content}
	<Content />
{/if}
