<script lang="ts">
	import SectionWrapper from '$lib/components/sectionwrapper.svelte'
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton'
</script>

<SectionWrapper>
	<div
		class="w-full prose prose-sm md:prose-base prose-h2:!text-primary-900
prose-h3:!text-tertiary-600-300-token prose-h2:font-fancy prose-ul:p-1
prose-ul:mt-0 prose-ul:rounded-lg prose-ul:bg-slate-300 prose-ul:list-disc
prose-ul:list-inside"
		id="experience"
	>
		<h2 class="section-title bg-error-400">Experience</h2>
		<div class="px-4 md:px-6">
			<h3 class="flex justify-between items-end mt-4">
				Capra, Senior&NonBreakingSpace;Frontend Engineer
				<span class="text-right">Dec 2023 - Current</span>
			</h3>
		</div>
		<div class="px-4 md:px-6">
			<h3 class="flex justify-between items-end mt-4">
				JProfessionals, Senior&NonBreakingSpace;Developer
				<span class="text-right">Mar 2023 - Dec 2023</span>
			</h3>
			<p>
				Stepped back into the realm of consulting and decided to bet on JPro. Here I created several
				internal applications, including <a href="https://overhuset.no">overhuset.no</a>, which was
				rebuilt entirely form scratch with SvelteKit and Tailwind.
			</p>
		</div>
		<div class="px-4 md:px-6">
			<h3 class="flex gap-2 justify-between items-end">
				Dr.Dropin, Fullstack&NonBreakingSpace;developer
				<span class="text-right">Aug 2021 - Feb&NonBreakingSpace;2022</span>
			</h3>
			<p>
				I wanted to try out inhouse and decided to go for Dr.Dropin, a startup that aims to disrupt
				the current state of our healthcare industry. I started as part of a completely new
				development department, and being the only frontend-focused full-stacker, I quickly ended up
				being responsible for most of the customer facing applications.
			</p>
			<div class="rounded-lg border border-l-8 border-primary-300 bg-slate-300">
				<Accordion>
					<AccordionItem>
						<svelte:fragment slot="summary">
							Some of the projects I was responsible for:
						</svelte:fragment>
						<svelte:fragment slot="content">
							<ul class="p-1 mt-0">
								<li>
									<a href="https://cr.drdropin.no/">Covid-19 test registration</a> - a web application
									that everyone who flew into OSL Airport from an international flight had to fill out
									to get their tests on arrival. I was responsible for developing and scaling this webapp
									for the tens of thousands of people who flew in when Omicron hit before christmas in
									2021. After implementing this form, we saw an increased throughput of ~300%, as opposed
									to the previous system.
								</li>

								<li>
									<a href="https://drdropin.no/">drdropin.no</a> - Built with GatsbyJS and Sanity. Implemented
									new design and rehauled the booking flow. Mentored a junior who helped me implement
									many features during my time there.
								</li>
								<li>
									<a href="https://drdropin.se/">drdropin.se</a> - Customised the code base for the norwegian
									site to allow for instantiating another web page with separate content for the swedish
									market.
								</li>
								<li>
									<a href="https://booking.drdropin.no/">booking.drdropin.no</a> - Built with NextJS,
									TypeScript, React Query, Zustand. Second phase of rehauling the booking flow includes
									splitting into a separate web app, based on NextJS.
								</li>
								<li>
									<a href="https://theseus.drdropin.no/">Theseus</a> - a component library built with
									Storybook, React, TypeScript and bundled with Rollup.
								</li>
							</ul>
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
		<div class="px-3 md:px-6">
			<h3 class="flex justify-between items-end">
				ITverket, Frontend&NonBreakingSpace;developer
				<span class="text-right">Feb 2020 - July&NonBreakingSpace;2021</span>
			</h3>
			<div>
				<p>
					After working on ServiceNow with AngularJS for a while, I decided to follow my passion for
					modern web development and got the opportunity to do this at ITverket. Here I was hired as
					a front-end developer, and was able to dive deep into React and TypeScript.
				</p>
				<div class="rounded-lg border border-l-8 border-primary-300 bg-slate-300">
					<Accordion>
						<AccordionItem>
							<svelte:fragment slot="summary">
								During my time at ITverket I worked on:
							</svelte:fragment>
							<svelte:fragment slot="content">
								<ul>
									<li>
										24SevenOffice - Joined their team working on rewriting their CRM module and
										helped them improve their apps performance, rewrite their form logic and craft
										custom components for their UI.
									</li>
									<li>
										Task - Built e-learning courses with React, hosted on their customers e-learning
										portals.
										<ul>
											<li>
												<a href="https://elaring.kompetansenorge.no/lesing-skriving">
													Kompetanse Norge: Bedre på lesing og skriving</a
												> - a course on improving reading and writing skills for adult education.
											</li>
											<li>
												<a href="https://elaring.kompetansenorge.no/regning"
													>Kompetanse Norge: Bedre på regning</a
												>
												- a course on improving math skills for adult education.
											</li>
											<li>
												<strong class="!text-primary-900">Fortum: HMS/HSE</strong> - an obligatory course
												for Fortum's employees teaching them about Health Saftey and Environment.
											</li>
										</ul>
									</li>
								</ul>
							</svelte:fragment>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</div>
		<div class="px-3 md:px-6">
			<h3 class="flex justify-between items-end">
				Sopra Steria, Frontend developer
				<span class="text-right">Dec 2017 - Jan&NonBreakingSpace;2020</span>
			</h3>
			<p>
				After the first semester, I decided to pause my studies and start full time as a ServiceNow
				consultant. During my time at Sopra Steria I worked as a web developer throughout the full
				stack of the ServiceNow platform.
			</p>
			<div class="rounded-lg border border-l-8 border-primary-300 bg-slate-300">
				<Accordion>
					<AccordionItem>
						<svelte:fragment slot="summary">
							During my time at there I helped these customers:
						</svelte:fragment>
						<svelte:fragment slot="content">
							<ul>
								<li>
									Avarn Security - Helped them combine portal pages following their merger with
									Nokas. Setup mutliple service portal pages and introduced a way to add Material
									Design to ServiceNow.
								</li>
								<li>
									Rema 1000 - Worked on their service portal and set up a custom search field for
									searching through their internal documents. Furthermore helped develop an
									integration with a standalone node service that enabled bar code scanners to
									access grocery store items stored in their ServiceNow databases.
								</li>
								<li>
									DNB - Designed and developed multiple portal pages related to their internal
									company security portal.
								</li>
								<li>
									Telenor Norge AS - Worked on
									<span title="redacted" class="pointer-events-none"
										>&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608</span
									>
									and helped them to
									<span title="redacted" class="pointer-events-none"
										>&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608</span
									>
									<br />
									... what I can say is that it was related to ServiceNow and I worked with JavaScript
									and AngularJS.
								</li>
							</ul>
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
		<div class="px-3 md:px-6">
			<h3 class="flex justify-between align-end">
				Syscom, Consultant
				<span class="text-right">June 2017 - Nov&NonBreakingSpace;2017</span>
			</h3>
			<p>
				Shortly after delivering and presenting my final project for my CS degree, I started working
				part time for Syscom as a consultant developing on the ServiceNow platform for their
				customers.
			</p>
		</div>
	</div>
</SectionWrapper>
