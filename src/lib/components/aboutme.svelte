<script>
	import SectionWrapper from '$lib/components/sectionwrapper.svelte'
	import berlinPic from '$lib/assets/berlinPic2.jpg'
</script>

<SectionWrapper>
	<div class="w-full max-w-none prose prose-h2:text-accent-alt prose-h2:font-fancy">
		<h2>About me</h2>
		<div class="grid-cols-3 md:grid">
			<div class="col-span-2">
				<p>
					I graduated OsloMet with a degree in Computer Science in 2017. My first job was as a consultant on the
					ServiceNow platform, creating custom Portals for our customers.
				</p>
				<p>
					Since then, I&apos;ve found and cultivated a passion for modern web development. React, NextJS, Tailwind,
					Vitest and Tanstack Query are among my favorite technologies to work with at the moment. At Dr.Dropin,
					I&apos;ve introduced and implemented most of these technologies with great success.
				</p>
				<p>
					I have three lovely pets, two british shorthairs: Linux and Gatsby, and a Shiba Inu - Neko.&nbsp;<span
						class="p-1 pointer-events-none"
						title="Easter egg: Either watch this page
on a ultrawide in full screen, or zoom all the way out.">🗿</span
					>
				</p>
				<p>
					Outside of work I can either be found in the kitchen, in front of a video game, around a board game or at a
					table of D&D. Maybe at our cottage.
				</p>
			</div>
			<div class="flex flex-col col-span-1 px-4 pt-6 prose-p:my-0">
				<img src={berlinPic} alt="Me in a burger bar in Berlin" class="hidden p-2 pb-8 md:block bg-warning" />
				<p>Oslo</p>
				<a href="mailto:mkluften93@gmail.com" class="text-warning"> mkluften93@gmail.com </a>
				<a href="https://www.linkedin.com/in/kluften-dev/" class="text-warning"> LinkedIn </a>
			</div>
		</div>
	</div>
</SectionWrapper>
