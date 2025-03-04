import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svx', '.md'] })],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // If it's a link to a future blog post, we can ignore it
        if (path.includes('/blog/nebula_chapter') && referrer === '/blog') {
          console.warn(`Ignoring missing future blog post: ${path}`);
          return;
        }
        
        // Otherwise, treat it as a real error
        throw new Error(message);
      }
    }
	},
  lias: {
		$lib: 'src/lib'
	},


  extensions: ['.svelte', '.svx', '.md'],
};

export default config;
