<script lang="ts">
	import SectionWrapper from '$lib/components/sectionwrapper.svelte'
	import { Accordion } from '@skeletonlabs/skeleton-svelte'
</script>

<SectionWrapper>
	<div
		class="w-full prose prose-sm md:prose-base prose-h2:!text-primary-900
prose-h3:!text-tertiary-600-300-token prose-h2:font-fancy prose-ul:p-1
prose-ul:mt-0 prose-ul:rounded-lg prose-ul:bg-slate-300 prose-ul:list-disc
prose-ul:list-inside"
		id="experience"
	>
		<h2 class="section-title noise bg-error-400">Experience</h2>
		<div class="px-4 md:px-6">
			<h3 class="flex justify-between items-end mt-4">
				Capra, <br />Senior&NonBreakingSpace;Fullstack developer
				<span class="text-right">Dec 2023 - Current</span>
			</h3>
			<p>
				After a brief stint at JProfessionals where I wasn't able to secure any projects, I made the
				decision to join Capra with the hope of finding more meaningful work. The initial months
				proved challenging with no assignments, but this allowed me to dedicate myself full-time to
				completing my Master's Thesis. In a stroke of perfect timing, I landed a project on the very
				day I submitted my thesis.
			</p>
			<div
				class="rounded-lg border border-l-8 border-primary-300 bg-slate-300 accord prose !text-primary-900 accord"
			>
				<Accordion collapsible>
					<Accordion.Item value="sopra">
						{#snippet control()}
							<span class="text-lg">During my time I've helped these customers:</span>
						{/snippet}
						{#snippet panel()}
							<ul class="text-primary-900">
								<li>
									<strong>Vy</strong>: Core member of Team Personnel, developing critical internal
									tools for train staff that enhance operational efficiency and service delivery.
								</li>
								<li>
									<strong>Enode</strong>: Spearheaded multiple MVP frontend applications showcasing
									Enode's smart energy platform capabilities. Later transitioned to enhancing their
									marketing presence by implementing improvements to
									<a href="https://enode.com">enode.com</a> using Remix and Sanity CMS.
								</li>
							</ul>
						{/snippet}
					</Accordion.Item>
				</Accordion>
			</div>
		</div>
		<div class="px-4 md:px-6">
			<h3 class="flex justify-between items-end mt-4">
				JProfessionals, <br /> Senior&NonBreakingSpace;Developer
				<span class="text-right">Mar 2023 - Dec 2023</span>
			</h3>
			<p>
				Joined JProfessionals to return to consulting, though faced a period without client
				projects. I leveraged this time productively by advancing my Master's Thesis research while
				also contributing to internal initiatives. Developed several internal applications,
				including a complete rebuild of <a href="https://overhuset.no">overhuset.no</a> using modern
				technologies (SvelteKit and Tailwind), significantly improving its performance and user experience.
			</p>
		</div>
		<div class="px-4 md:px-6">
			<h3 class="flex gap-2 justify-between items-end">
				Dr.Dropin, <br /> Fullstack&NonBreakingSpace;developer
				<span class="text-right">Aug 2021 - Feb&NonBreakingSpace;2022</span>
			</h3>
			<p>
				Joined this healthcare disruptor as one of the founding members of their new development
				department. As the primary frontend-focused full-stack developer, I quickly assumed
				responsibility for all customer-facing applications.
			</p>
			<div
				class="rounded-lg border border-l-8 border-primary-300 bg-slate-300 accord prose !text-primary-900 accord"
			>
				<Accordion collapsible>
					<Accordion.Item value="drdropin">
						{#snippet control()}
							<span class="text-lg">Notable projects:</span>
						{/snippet}

						{#snippet panel()}
							<ul class="p-1 mt-0">
								<li>
									<a href="https://cr.drdropin.no/">Covid-19 test registration</a>: Developed and
									scaled a critical application for international travelers at OSL Airport during
									the Omicron surge. Achieved ~300% throughput improvement compared to the previous
									system.
								</li>

								<li>
									Corporate Websites (<a href="https://drdropin.no/">drdropin.no</a> &
									<a href="https://drdropin.se/">drdropin.se</a>): Implemented new design and
									optimized booking flow using GatsbyJS and Sanity. Led internationalization efforts
									to expand into the Swedish market through the web.
								</li>
								<li>
									<a href="https://booking.drdropin.no/">booking.drdropin.no</a> - Architected and built
									a dedicated booking application using NextJS, TypeScript, React Query, and Zustand
									for improved performance and user experience.
								</li>
								<li>
									<a href="https://theseus.drdropin.no/">Theseus component library</a> - Created a reusable
									component system with Storybook, React, and TypeScript to ensure consistency across
									applications.
								</li>
							</ul>
						{/snippet}
					</Accordion.Item>
				</Accordion>
			</div>
		</div>
		<div class="px-3 md:px-6">
			<h3 class="flex justify-between items-end">
				ITverket, <br />Frontend&NonBreakingSpace;developer
				<span class="text-right">Feb 2020 - July&NonBreakingSpace;2021</span>
			</h3>
			<div>
				<p>
					Pursued my passion for modern web development at ITverket, where I deepened my expertise
					in React and TypeScript across multiple client engagements.
				</p>
				<div
					class="rounded-lg border border-l-8 border-primary-300 bg-slate-300 accord prose !text-primary-900"
				>
					<Accordion classes="accord" collapsible>
						<Accordion.Item value="itverket">
							{#snippet control()}
								<span class="text-lg">Key projects:</span>
							{/snippet}
							{#snippet panel()}
								<ul>
									<li>
										<strong>24SevenOffice</strong>: Enhanced performance and user experience by
										rewriting their CRM module, optimizing form logic, and developing custom UI
										components.
									</li>
									<li>
										<strong>Task</strong>: Designed and built interactive educational courses for
										various clients including:
										<ul>
											<li>
												<a href="https://elaring.kompetansenorge.no/lesing-skriving">
													Kompetanse Norge: Bedre på lesing og skriving</a
												>: Created accessible educational modules for adult literacy and numeracy
											</li>
											<li>
												<strong>Fortum: HMS/HSE</strong>: Developed a comprehensive HSE training
												platform for employee safety compliance
											</li>
										</ul>
									</li>
								</ul>
							{/snippet}
						</Accordion.Item>
					</Accordion>
				</div>
			</div>
		</div>
		<div class="px-3 md:px-6">
			<h3 class="flex justify-between items-end">
				Sopra Steria, <br /> Frontend developer
				<span class="text-right">Dec 2017 - Jan&NonBreakingSpace;2020</span>
			</h3>
			<p>
				Transitioned from studies to full-time work as a ServiceNow consultant, delivering solutions
				across the platform's full stack.
			</p>
			<div class="rounded-lg border border-l-8 border-primary-300 bg-slate-300 prose accord">
				<Accordion collapsible>
					<Accordion.Item value="sopra">
						{#snippet control()}
							<span class="text-lg">During my time there I helped these customers:</span>
						{/snippet}
						{#snippet panel()}
							<ul class="text-primary-900">
								<li>
									<strong>Avarn Security</strong>: Facilitated post-merger integration by
									consolidating portal pages and introducing Material Design principles to
									ServiceNow.
								</li>
								<li>
									<strong>Rema 1000</strong>: Developed a custom document search functionality and
									created an integration enabling barcode scanners to access inventory data within
									ServiceNow.
								</li>
								<li>
									<strong>DNB</strong>: Designed and implemented multiple security-focused portal
									pages, enhancing internal information security processes.
								</li>
								<li>
									<strong>Telenor Norge AS</strong>: Contributed to critical ServiceNow projects
									using JavaScript and AngularJS (details redacted).
								</li>
							</ul>
						{/snippet}
					</Accordion.Item>
				</Accordion>
			</div>
		</div>
		<div class="px-3 md:px-6">
			<h3 class="flex justify-between items-end">
				Syscom, <br />Consultant
				<span class="text-right">June 2017 - Nov&NonBreakingSpace;2017</span>
			</h3>
			<p>
				Began my professional career shortly after completing my Computer Science degree, working
				part-time as a ServiceNow platform consultant while developing solutions for various
				clients.
			</p>
		</div>
	</div>
</SectionWrapper>

<style>
	.accord :global {
		button {
			background: transparent !important;
			color: black !important;
			cursor: pointer;
		}
		h3 {
			margin: 0;
		}
		a {
			color: oklch(62.45% 0.22 355.9deg);
		}
	}
</style>
