<script>
	import Footer from '$lib/components/footer.svelte'
	// import hljs from 'highlight.js/lib/core'
	// import rust from 'highlight.js/lib/languages/rust'
	// import bash from 'highlight.js/lib/languages/bash'
	// import shell from 'highlight.js/lib/languages/shell'
	import 'highlight.js/styles/github-dark.css'
	// import { storeHighlightJs } from '@skeletonlabs/skeleton'
	//
	// storeHighlightJs.set(hljs)
	//
	// hljs.registerLanguage('rust', rust)
	// hljs.registerLanguage('bash', bash)
	// hljs.registerLanguage('shell', shell)
</script>

<slot />
<Footer />
