<script lang="ts">
	import SectionWrapper from '$lib/components/sectionwrapper.svelte'
	import marius from '$lib/assets/marius.jpeg'
</script>

<SectionWrapper>
	<div class="relative mt-0 w-full rounded-bl-2xl prose prose-h2:!text-primary-900">
		<h2 class="section-title noise bg-warning-500">Background</h2>
		<div class="grid-cols-3 px-6 md:grid md:pr-3">
			<div class="col-span-2 border-b-2 md:border-none border-slate-900 prose pt-6">
				<p>
					Check out my thesis project @ <a href="http://nebula.no">nebula.no</a>, where I've
					developed a FaaS prototype powered by Rust and WebAssembly!
				</p>
				<p>
					React, NextJS, Tailwind, Vitest and React Query are among my favorite technologies to work
					with on the frontend at the moment. On the backend I'm in love with Rust and Elixir, while
					proficient in Node as well.
				</p>
				<p>
					I have three lovely pets, two british shorthairs: Linux and Gatsby, and a Shiba Inu -
					Neko.
				</p>
				<p class="mb-4">
					Outside of work I can either be found in the kitchen, in front of a video game, around a
					board game or at a table of D&D. Maybe at our cottage.
				</p>
			</div>
			<div class="flex col-span-1 gap-2 py-4 md:flex-col md:px-4 md:pt-6 prose-p:my-0">
				<img
					src={marius}
					alt="Me and Neko at ZZ Pizza in Oslo"
					class="block !m-0 mb-2 w-28 h-28 rounded-md border-2 md:w-full md:h-auto bg-warning border-slate-800"
				/>
				<div>
					<p>Marius Nilsen Kluften</p>
					<p>Oslo, Norway</p>
					<a href="mailto:contact@kluften.dev"> contact@kluften.dev </a>
					<a href="https://www.linkedin.com/in/kluften-dev/"> LinkedIn </a>
				</div>
			</div>
		</div>
		<div
			class="absolute bottom-1 right-2 p-1 pointer-events-none"
			title="Easter egg: Either watch this page on a ultrawide in full screen, or zoom all the way out."
		>
			🐣
		</div>
	</div>
</SectionWrapper>
