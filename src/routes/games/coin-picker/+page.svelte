<script lang="ts">
	import { onMount } from 'svelte'
	let gameLoaded = false
	let loadingText = 'Loading game...'
	let gameContainer: HTMLDivElement

	onMount(async () => {
		try {
			// Load the WASM module via a script tag to bypass Vite's static analysis
			const script = document.createElement('script')
			script.type = 'module'
			script.textContent = `
				import init from '/games/coin-picker/coin-picker.js';
				try {
					await init();
				} catch (err) {
					if (!err?.message?.includes('Using exceptions for control flow')) {
						console.error('Game init error:', err);
					}
				}
			`
			document.head.appendChild(script)

			// Wait for Bevy to create the canvas
			await new Promise<void>((resolve) => {
				const check = setInterval(() => {
					if (document.querySelector('canvas')) {
						clearInterval(check)
						resolve()
					}
				}, 100)
			})

			const canvas = document.querySelector('canvas')
			if (canvas && gameContainer) {
				canvas.remove()
				gameContainer.appendChild(canvas)
				canvas.style.width = '100%'
				canvas.style.height = '100%'
			}
		} catch (err) {
			console.error('Failed to load game:', err)
		} finally {
			gameLoaded = true
		}
	})
</script>

<div class="max-w-3xl mx-auto p-5">
	<h1 class="text-3xl font-bold">Coin Picker</h1>
	<h2 class="text-xl mb-4">Collect coins, buy upgrades, grab powerups!</h2>
	<div
		class="relative w-[840px] h-[640px] mx-auto bg-black rounded-lg overflow-hidden"
		bind:this={gameContainer}
	>
		{#if !gameLoaded}
			<div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 z-10">
				<div class="text-white text-2xl">{loadingText}</div>
			</div>
		{/if}
	</div>
	<div class="mt-5 text-center">
		<p>
			Use arrow keys or WASD to move. Collect coins, grab powerups, and spend your earnings on
			upgrades!
		</p>
	</div>
</div>
