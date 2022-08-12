import SectionWrapper from '../SectionWrapper'

export const DCExpContent = () => {
  return (
    <>
      <div>
        <h3 className="flex justify-between items-end">
          Dr.Dropin, Full-stack developer
          <span>Aug 2021 - Current</span>
        </h3>
        <p>
          Having spent my career as a consultant, I found out that I wanted to
          try out the &ldquo;
          <i>other side</i>
          &rdquo;. I decided to start working for Dr.Dropin, a startup that aims
          to disrupt the current state of our healthcare industry. As a part of
          a completely new development department, I became resonsible for our
          web page, running on Sanity and GatsbyJS.
        </p>
        <p>
          Some of the projects I&apos;ve been responsible for since starting:
        </p>
        <ul>
          <li>
            <strong>Theseus</strong> - our component library. Built with
            Storybook, React, TypeScript and Rollup. Currently used across all
            our frontend projects.
          </li>
          <li>
            <strong>Covid-19 Test registration</strong> - A web application that
            everyone who flew into OSL Airport from an international flight had
            to fill out to get their tests on arrival. I was responsible for
            developing and scaling this webapp for the tens of thousands of
            people who flew in when Omicron hit before christmas in 2021. After
            successfully implementing this form, we saw an increased throughput
            of ~300%, as opposed to the previous system.
          </li>

          <li>
            <strong>DrDropin.no</strong> - Built with GatsbyJS and Sanity.
            Successfully implemented new design and rehauled the booking flow.
          </li>
          <li>
            <strong>New booking web app</strong> - Built with NextJS,
            TypeScript, React Query, Zustand. Second phase of rehauling the
            booking flow includes splitting into a separate web app, based on
            NextJS.
          </li>
        </ul>
      </div>
      <div>
        <h3 className="flex justify-between items-end">
          ITverket, Front-end
          <span>Feb 2020 - July 2021</span>
        </h3>
        <p>
          After a couple of years developing web applications on ServiceNow, I
          decided to follow my passion for more modern web development and got
          the opportunity to do this at ITverket. I was hired as a front-end
          developer, and had a blast working for two clients during my time
          there.
          <ul>
            <li>
              Task - Built e-learning courses with React, hosted on their
              customers e-learning portals.
              <ul>
                <li>
                  <a href="https://elaring.kompetansenorge.no/lesing-skriving">
                    Kompetanse Norge - <i>Bedre på lesing og skriving</i>
                  </a>
                  , a course on improving reading and writing skills for adult
                  education.
                </li>
                <li>
                  <a href="https://elaring.kompetansenorge.no/regning">
                    Kompetanse Norge - <i>Bedre på regning</i>
                  </a>
                  , a course on improving math skills for adult education.
                </li>
              </ul>
            </li>
            <li>
              24SevenOffice - Joind their CRM team and helped them build a new
              CRM system.
            </li>
          </ul>
        </p>
      </div>
      <div>
        <h3 className="flex justify-between items-end">
          Sopra Steria, Front-end
          <span>Dec 2017 - Jan 2020</span>
        </h3>
        <p>
          I decided to break off my studies and go full time as a ServiceNow
          consultant, and got hired by Sopra Steria. I worked as a web developer
          throughout the full stack of the ServiceNow platform. This stack
          included configuring and maintaining the server-side (backend
          code/databases/workflows) while portraying enterprise data in
          meaningful and intuitive layouts in the service portal (AngularJS
          frontend). I’ve also arranged multiple courses on developing Service
          Portal Widgets for colleagues interested in learning about developing
          custom widgets for our projects.
        </p>
      </div>
      <div>
        <h3 className="flex justify-between align-end">
          Syscom, ServiceNow
          <span>June 2017 - Nov 2017</span>
        </h3>
        <p>
          Shortly after delivering and presenting my final project for my CS
          degree, I started working for Syscom as a consultant developing on the
          ServiceNow platform for a couple of customers during the summer. Moved
          on to a part-time position while starting on a Master&apos;s Degree at
          UiO.
        </p>
      </div>
    </>
  )
}

export const Education = () => {
  return (
    <>
      <h2>Education</h2>
      <h3 className="flex justify-between items-end align-end">
        Bachelor, Software Engineering
        <span>2014 - 2017</span>
      </h3>
      <p>Oslo and Akershus University College of Applied Sciences</p>
    </>
  )
}

const Experience = () => {
  return (
    <SectionWrapper id="exp" className="md:mt-[150px]" yOffset={-100}>
      <div
        className="prose prose prose-h2:text-accent-alt prose-h3:text-accent prose-h2:font-fancy w-full"
        id="experience"
      >
        <h2>Experience</h2>
        <DCExpContent />
        <hr />
        <Education />
      </div>
    </SectionWrapper>
  )
}

export default Experience
