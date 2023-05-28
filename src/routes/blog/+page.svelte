<script>
	import SvelteMarkdown from 'svelte-markdown'
	//import source from '$lib/data/5-things-I-learned-at-wasm-io.md?raw'
	import source from '/Users/mariuskluften/projects/uio/master-thesis/docs/thesis_essay/essay.md?raw'
</script>

<div class="flex justify-center">
	<div class="prose">
		<div class="pt-44" />
		<SvelteMarkdown {source} />
	</div>
</div>
