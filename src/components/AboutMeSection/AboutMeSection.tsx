const AboutMeSection = () => {
  return (
    <section className="flex justify-center bg-primary w-full">
      <div className="w-10/12 pl-1 pt-1 pb-3 pr-3 my-8 bg-accent">
        <div className="prose prose-h2:text-accent-alt p-4 px-8 bg-white prose-h2:font-fancy shadow-lg">
          <h2>About me</h2>
          <p>
            I graduated OsloMet with a degree in Computer Science in 2017. My
            first job was as a consultant on the ServiceNow platform, creating
            custom Portals for our customers.
          </p>
          <p>
            Since then, I&apos;ve found and cultivated a passion for modern web
            development. <strong>React</strong>, <strong>NextJS</strong>,{' '}
            <strong>Tailwind</strong> and <strong>React Query</strong> are among
            my favorite technologies to work with at the moment. At my current
            job, <strong>@ Dr.Dropin</strong>, I&apos;ve introduced and
            implemented all these technologies with great success.
          </p>
          <p>
            On my off-time, I love spending time with my two British Shorthairs;
            Gatsby and Linux. Generally I can either be found in the kitchen, in
            front of a video game, around a board game or at a table of D&D.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection
