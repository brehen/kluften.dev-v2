import Image from 'next/image'
import berlinPic from '../../../../public/berlinpic2.jpg'
import SectionWrapper from '@components/sections/SectionWrapper'

const AboutMeSection = () => {
  return (
    <SectionWrapper
      id="about"
      yOffset={-100}
      className="bg-gradient-to-b from-black/[0.90] to-primary"
    >
      <div className="prose prose-h2:text-accent-alt prose-h2:font-fancy w-full">
        <h2>About me</h2>
        <div className="md:grid grid-cols-3">
          <div className="col-span-2">
            <p>
              I graduated OsloMet with a degree in Computer Science in 2017. My
              first job was as a consultant on the ServiceNow platform, creating
              custom Portals for our customers.
            </p>
            <p>
              Since then, I&apos;ve found and cultivated a passion for modern
              web development. <strong>React</strong>,&nbsp;
              <strong>NextJS</strong>, <strong>Tailwind</strong> and&nbsp;
              <strong>React Query</strong> are among my favorite technologies to
              work with at the moment. At Dr.Dropin, I&apos;ve introduced and
              implemented most of these technologies with great success.
            </p>
            <p>
              I have three lovely pets, two british shorthairs: Linux and
              Gatsby, and a Shiba Inu - Neko.
              <small>
                (hint: If you&apos;re not on a Ultrawide monitor, this is the
                time to zoom out){' '}
              </small>
            </p>
            <p>
              Outside of work I can either be found in the kitchen, in front of
              a video game, around a board game or at a table of D&D. Maybe at
              our cottage.
            </p>
          </div>
          <div className="prose-p:my-0 col-span-1 px-4 pt-6 flex flex-col">
            <div className="hidden md:block p-1 mb-2 bg-warning">
              <Image
                src={berlinPic}
                alt="Picture of me in a burger bar in Berlin"
                quality={50}
                layout="responsive"
                className="hidden"
              />
            </div>
            <p>Oslo</p>
            <a href="mailto:mkluften93@gmail.com" className="text-warning">
              mkluften93@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/kluften-dev/"
              className="text-warning"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default AboutMeSection
