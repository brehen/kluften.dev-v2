const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				kluften: {
					primary: '#2c4c7f',
					secondary: '#1a338f',
					accent: '#ff3c9c',
					neutral: '#010101',
					'base-100': '#E9E0EB',
					info: '#AACEE9',
					success: '#15605A',
					warning: '#ef591e',
					error: '#F31651'
				}
			},
			{
				'kluften-dark': {
					primary: '#2c4c7f',
					secondary: '#1a338f',
					accent: '#ff3c9c',
					'accent-alt': '',
					'base-100': '#2A303C',
					'base-content': '#d6ddca',
					'primary-content': '#3d404c',
					info: '#AACEE9',
					success: '#15605A',
					warning: '#d95318',
					error: '#F31651'
				}
			}
		]
	},
	theme: {
		screens: defaultTheme.screens,
		extend: {
			fontFamily: {
				sans: ['Overpass', ...defaultTheme.fontFamily.sans],
				fancy: ['Poppins']
			},
			screens: {
				'3xl': '2560px'
			},
			colors: {
				main: '#16296e',
				secondary: '#1a338f',
				tertiary: '#236ada',
				fortiary: '#E5EFFF',
				accent: '#ff3c9c',
				'accent-alt': '#dd5d2e'
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.rotate-x-180': {
					transform: 'rotateX(180deg)'
				},
				'.rotate-y-180': {
					transform: 'rotateY(180deg)'
				}
			})
		})
	]
}
