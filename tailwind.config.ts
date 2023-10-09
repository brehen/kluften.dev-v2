import { join } from 'path'
import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'
import { kluften } from './src/kluften'
import { skeleton } from '@skeletonlabs/tw-plugin'
import { Config } from 'tailwindcss'

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Overpass', ...defaultTheme.fontFamily.sans],
				fancy: ['Poppins']
			},
			screens: {
				'3xl': '2560px'
			},
			width: {
				dscreen: '100dvw'
			},
			height: {
				dscreen: '100dvh'
			},
			spacing: {
				nav: '72px'
			}
		}
	},
	plugins: [
		typography,
		skeleton({
			themes: {
				custom: [kluften]
			}
		})
	]
} satisfies Config

export default config
