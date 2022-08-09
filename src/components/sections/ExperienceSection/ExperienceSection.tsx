import SectionWrapper from '../SectionWrapper'

export const DCExpContent = () => {
  return (
    <>
      <div>
        <h3 className="flex justify-between items-end">
          DrDropin
          <span>Aug 2021 - Current</span>
        </h3>
        <p>
          Having spent all my career as a consultant, I decided I wanted to try
          out being an inhouse developer. I decided to start working for
          Dr.Dropin, a startup that aims to disrupt the current state of our
          healthcare industry. As a part of a completely new development
          department, I became resonsible for our web page, running on Sanity
          and GatsbyJS.
        </p>
        <p>
          Some of the projects I&apos;ve been responsible for since starting:
        </p>
        <ul>
          <li>
            Theseus - our component library. Built with Storybook, React,
            TypeScript and Rollup. Currently used across all our frontend
            projects.
          </li>
          <li>
            DrDropin.no - Built with GatsbyJS and Sanity. Successfully
            implemented new design and rehauled the booking flow.
          </li>
          <li>
            New booking web app - Built with NextJS, TypeScript, React Query,
            Zustand. Second phase of rehauling the booking flow includes
            splitting into a separate web app, based on NextJS.
          </li>
        </ul>
      </div>
      <div>
        <h3 className="flex justify-between items-end">
          ITverket
          <span>Feb 2020 - Current</span>
        </h3>
        <p>
          After a couple of years developing web applications on ServiceNow, I
          decided to follow my passion for more modern web development and got
          the opportunity to do this at ITverket. I&apos;m currently hired out
          as a react consultant, helping our customers develop amazing front-end
          applications.
        </p>
      </div>
      <div>
        <h3 className="flex justify-between items-end">
          Sopra Steria
          <span>Dec 2017 - Jan 2020</span>
        </h3>
        <p>
          I worked as a web developer throughout the full stack of the
          ServiceNow platform. This entailed configuring and maintaining the
          server-side (backend code/databases/workflows) while portraying
          enterprise data in meaningful and intuitive layouts in the service
          portal (AngularJS frontend). I’ve also arranged multiple courses on
          developing Service Portal Widgets for colleagues interested in
          learning about developing custom widgets for our projects.
        </p>
      </div>
      <div>
        <h3 className="flex justify-between align-end">
          Syscom
          <span>June 2017 - Nov 2017</span>
        </h3>
        <p>
          Shortly after delivering and presenting my final project for my CS
          degree, I started working for Syscom as a consultant developing on the
          ServiceNow platform for a couple of customers during the summer. Moved
          on to a part-time position while starting on a Master&apos;s Degree at
          UiO, but after the first semester, I got a great job offer and decided
          to end my studies to pursue a career as a ServiceNow consultant.
        </p>
      </div>
    </>
  )
}

export const Education = () => {
  return (
    <>
      <h3 className="flex justify-between items-end align-end">
        Bachelor, Software Engineering
        <span>Aug 2014 - May 2017</span>
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
        <h2>Experiences</h2>
        <Education />
        <hr />
        <DCExpContent />
      </div>
    </SectionWrapper>
  )
}

export default Experience
