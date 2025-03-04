<script lang="ts">
	import { onMount } from 'svelte'
	let gameLoaded = false
	let loadingText = 'Loading game...'
	let gameContainer: HTMLDivElement

	onMount(async () => {
		// Add global error handlers to suppress Bevy's control flow exception
		try {
			// Dynamically import the game module
			const gameModule = await import('/games/coin-collector/bevygame.js?url')
			// Initialize the game
			try {
				// @ts-ignore
				await gameModule.default()
			} catch (err) {
				// @ts-ignore
				if (!err?.message?.includes('Using exceptions for control flow')) {
					throw err
				}
			}

			// Move the canvas into our container
			// Bevy creates a canvas and appends it to body by default
			const canvas = document.querySelector('canvas')
			if (canvas && gameContainer) {
				// Remove from body and add to our container
				canvas.remove()
				gameContainer.appendChild(canvas)

				// Make it fit the container
				canvas.style.width = '100%'
				canvas.style.height = '100%'
			}
		} catch (err) {
			// Suppress the specific Bevy error
			// @ts-ignore
			if (!err?.message?.includes('Using exceptions for control flow')) {
				console.error('Failed to load game:', err)
			}
		} finally {
			// Mark as loaded regardless
			gameLoaded = true
		}
	})
</script>

<div class="max-w-3xl mx-auto p-5">
	<h1 class="text-3xl font-bold">Coin Collector!</h1>
	<h2 class="text-xl mb-4">Collect as many coins as you can!</h2>
	<div
		class="relative w-[640px] h-[640px] mx-auto bg-black rounded-lg overflow-hidden"
		bind:this={gameContainer}
	>
		{#if !gameLoaded}
			<div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 z-10">
				<div class="text-white text-2xl">{loadingText}</div>
			</div>
		{/if}
	</div>
	<div class="mt-5 text-center">
		<p>Use arrow keys or WASD to move the character.</p>
	</div>
</div>
