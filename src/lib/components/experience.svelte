<script lang="ts">
	import SectionWrapper from '$lib/components/sectionwrapper.svelte'
</script>

<SectionWrapper>
	<div class="w-full prose prose-h2:text-accent-alt prose-h3:text-accent prose-h2:font-fancy" id="experience">
		<h2>Experience</h2>
		<div>
			<h3 class="flex justify-between items-end">
				Dr.Dropin, Full-stack
				<span>Aug 2021 - Current</span>
			</h3>
			<p>
				Having spent my career as a consultant, I found out that I wanted to try out the &ldquo;
				<i>other side</i>
				&rdquo;. I decided to start working for Dr.Dropin, a startup that aims to disrupt the current state of our healthcare
				industry. As a part of a completely new development department, I became resonsible for our web page, running on
				Sanity and GatsbyJS.
			</p>
			<p>Some of the projects I&apos;ve been responsible for since starting:</p>
			<ul>
				<li>
					<a href="https://theseus.drdropin.no/">Theseus</a> - a component library built with Storybook, React, TypeScript
					and bundled with Rollup.
				</li>
				<li>
					<a href="https://cr.drdropin.no/">Covid-19 test registration</a> - a web application that everyone who flew into
					OSL Airport from an international flight had to fill out to get their tests on arrival. I was responsible for developing
					and scaling this webapp for the tens of thousands of people who flew in when Omicron hit before christmas in 2021.
					After implementing this form, we saw an increased throughput of ~300%, as opposed to the previous system.
				</li>

				<li>
					<a href="https://drdropin.no/">drdropin.no</a> - Built with GatsbyJS and Sanity. Implemented new design and rehauled
					the booking flow. Mentored a junior who helped me implement many features during my time there.
				</li>
				<li>
					<a href="https://drdropin.se/">drdropin.se</a> - Customised the code base for the norwegian site to allow for instantiating
					another web page with separate content for the swedish market.
				</li>
				<li>
					<a href="https://booking.drdropin.no/">booking.drdropin.no</a> - Built with NextJS, TypeScript, React Query, Zustand.
					Second phase of rehauling the booking flow includes splitting into a separate web app, based on NextJS.
				</li>
			</ul>
		</div>
		<div>
			<h3 class="flex justify-between items-end">
				ITverket, Front-end
				<span>Feb 2020 - July 2021</span>
			</h3>
			<div>
				<p>
					After working on ServiceNow with AngularJS for a while, I decided to follow my passion for modern web
					development and got the opportunity to do this at ITverket. Here I was hired as a front-end developer, and was
					able to dive deep into React and TypeScript.
				</p>
				<h4>During my time at ITverket I worked on:</h4>
				<ul>
					<li>
						24SevenOffice - Joined their team working on rewriting their CRM module and helped them improve their apps
						performance, rewrite their form logic and craft custom components for their UI.
					</li>
					<li>
						Task - Built e-learning courses with React, hosted on their customers e-learning portals.
						<ul>
							<li>
								<a href="https://elaring.kompetansenorge.no/lesing-skriving">
									Kompetanse Norge: Bedre på lesing og skriving</a
								> - a course on improving reading and writing skills for adult education.
							</li>
							<li>
								<a href="https://elaring.kompetansenorge.no/regning">Kompetanse Norge: Bedre på regning</a>
								- a course on improving math skills for adult education.
							</li>
							<li>
								<strong>Fortum: HMS/HSE</strong> - an obligatory course for Fortum's employees teaching them about Health
								Saftey and Environment.
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div>
			<h3 class="flex justify-between items-end">
				Sopra Steria, Front-end
				<span>Dec 2017 - Jan 2020</span>
			</h3>
			<p>
				After the first semester, I decided to pause my studies and start full time as a ServiceNow consultant. During
				my time at Sopra Steria I worked as a web developer throughout the full stack of the ServiceNow platform.
			</p>
			<h4>During my time at there I helped these customers:</h4>
			<ul>
				<li>
					Avarn Security - Helped them combine portal pages following their merger with Nokas. Setup mutliple service
					portal pages and introduced a way to add Material Design to ServiceNow.
				</li>
				<li>
					Rema 1000 - Worked on their service portal and set up a custom search field for searching through their
					internal documents. Furthermore helped develop an integration with a standalone node service that enabled bar
					code scanners to access grocery store items stored in their ServiceNow databases.
				</li>
				<li>DNB - Designed and developed multiple portal pages related to their internal company security portal.</li>
				<li>
					Telenor Norge AS - Worked on
					<span title="redacted" class="pointer-events-none">&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608</span> and
					helped them to
					<span title="redacted" class="pointer-events-none">&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608</span>
					<br />
					... what I can say is that it was related to ServiceNow and I worked with JavaScript and AngularJS.
				</li>
			</ul>
		</div>
		<div>
			<h3 class="flex justify-between align-end">
				Syscom, ServiceNow
				<span>June 2017 - Nov 2017</span>
			</h3>
			<p>
				Shortly after delivering and presenting my final project for my CS degree, I started working part time for
				Syscom as a consultant developing on the ServiceNow platform for their customers.
			</p>
		</div>
		<hr />
		<h2>Education</h2>
		<h3 class="flex justify-between items-end align-end">
			Bachelor, Software Engineering
			<span>2014 - 2017</span>
		</h3>
		<p>Oslo and Akershus University College of Applied Sciences</p>
	</div>
</SectionWrapper>
