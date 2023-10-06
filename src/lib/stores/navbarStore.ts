import { writable } from 'svelte/store'

export const NAVBAR_HEIGHT = 72

export const whenToSwapNavBarStore = writable(NAVBAR_HEIGHT)
export const updateNavbarLimit = (height: number) => {
	whenToSwapNavBarStore.set(height)
}
export let whenToSwapNavBar: number
whenToSwapNavBarStore.subscribe((num) => {
	whenToSwapNavBar = num
})

export const shouldSwapNavbarStore = writable(false)
export const setShouldSwapNavbar = shouldSwapNavbarStore.set
export let shouldSwapNavbar: boolean
shouldSwapNavbarStore.subscribe((should) => {
	shouldSwapNavbar = should
})

export const currentTaglineStore = writable('')

export let currentTagline: string
export const setCurrentTagline = currentTaglineStore.set
currentTaglineStore.subscribe((tagline) => {
	currentTagline = tagline
})
