<script>
	import hero from '$lib/assets/hero-1.jpg'
</script>

<section class="relative w-full h-screen">
	<img src={hero} alt="" class="w-full h-full object-cover object-[80%] lg:object-center" />
	<div
		class="flex absolute inset-0 justify-center items-center text-white bg-gradient-to-b prose-xl font-fancy from-slate-900/60 to-slate-900/20"
	>
		<div class="z-50 pt-10 pr-14 w-10/12 cursor-default md:p-0 md:w-7/12">
			<h1 class="h1">I&apos;m Marius Nilsen Kluften.</h1>
			<h2 class="h2 flex flex-col flex-wrap mt-8 !text-white">
				<span>
					A<span class="inline-block px-1 mx-2 bg-white hover:animate-ping text-primary-500">
						web
					</span>developer based in Oslo.
				</span>
				<span>
					Working for Capra, crafting
					<span
						class="inline-block px-1 bg-white transition text-tertiary-500 hover:motion-safe:animate-spin"
					>
						<span class="block">sweet</span>
					</span>
					web apps.
				</span>
			</h2>
		</div>
	</div>
</section>
