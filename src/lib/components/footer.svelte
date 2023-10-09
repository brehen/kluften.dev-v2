<script lang="ts">
	import SectionWrapper from '$lib/components/sectionwrapper.svelte'
	import marius from '$lib/assets/marius.jpeg'
</script>

<footer class="mt-auto w-screen mb-nav">
	<SectionWrapper maxW="max-w-md">
		<div
			class="relative mt-0 w-full rounded-bl-2xl prose
prose-h2:!text-primary-900 prose-h2:font-fancy"
		>
			<h2 class="section-title bg-blue-400">About the author</h2>
			<div class="flex gap-4 pt-4 px-4 md:pt-6 prose-p:my-0">
				<img
					src={marius}
					alt="Me and Neko at ZZ Pizza in Oslo"
					class="block m-0 mb-4 max-w-[120px] w-2/5 rounded-md border-2 md:w-full md:h-auto bg-warning border-slate-800"
				/>
				<p class="mt-4 w-3/5 md:w-1/2">Marius likes cool tech and has three bomb ass pets.</p>
				<div class="space-y-2 mb-4 w-fit justify-center">
					<a
						href="https://twitter.com/mkluften"
						target="_blank"
						rel="noreferrer"
						class="bg-black p-3 rounded-full flex items-center justify-center"
						aria-label="Marius's Twitter"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							fill="white"
							viewBox="0 0 300 300.251"
							version="1.1"
						>
							<path
								d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"
							/>
						</svg>
					</a>
					<a
						href="https://github.com/brehen"
						target="_blank"
						class="bg-black p-3 rounded-full flex items-center justify-center"
						rel="noreferrer"
						aria-label="Marius's GitHub"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="fill-white"
							width="30"
							height="30"
							viewBox="0 0 24 24"
						>
							<path
								d="M20.38 8.53c.16-.4.68-1.99-.17-4.14c0 0-1.31-.39-4.3 1.61c-1.25-.33-2.58-.38-3.91-.38c-1.32 0-2.66.05-3.91.38c-2.99-2.03-4.3-1.61-4.3-1.61c-.85 2.15-.33 3.74-.16 4.14C2.61 9.62 2 11 2 12.72c0 6.44 4.16 7.89 10 7.89c5.79 0 10-1.45 10-7.89c0-1.72-.61-3.1-1.62-4.19M12 19.38c-4.12 0-7.47-.19-7.47-4.19c0-.95.47-1.85 1.27-2.58c1.34-1.23 3.63-.58 6.2-.58c2.59 0 4.85-.65 6.2.58c.8.73 1.3 1.62 1.3 2.58c0 3.99-3.37 4.19-7.5 4.19m-3.14-6.26c-.82 0-1.5 1-1.5 2.22c0 1.23.68 2.24 1.5 2.24c.83 0 1.5-1 1.5-2.24c0-1.23-.67-2.22-1.5-2.22m6.28 0c-.83 0-1.5.99-1.5 2.22c0 1.24.67 2.24 1.5 2.24c.82 0 1.5-1 1.5-2.24c0-1.23-.64-2.22-1.5-2.22z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</SectionWrapper>
</footer>
