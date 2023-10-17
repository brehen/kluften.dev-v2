<script>
	import Footer from '$lib/components/footer.svelte'
	import hljs from 'highlight.js/lib/core'
	import rust from 'highlight.js/lib/languages/rust'
	import 'highlight.js/styles/github-dark.css'
	import { storeHighlightJs } from '@skeletonlabs/skeleton'

	storeHighlightJs.set(hljs)

	hljs.registerLanguage('rust', rust)
</script>

<slot />
<Footer />
