import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Hero from '@components/sections/Hero'
import AboutMeSection from '@components/sections/AboutMeSection'
import Proficiencies from '@components/sections/Proficiencies'
import linux from '../../public/linux-3.png'
import gatsby from '../../public/gatsby-3.png'
import CurvyEnd from '@components/Curves/CurvyEnd'
import Experience from '@components/sections/ExperienceSection'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Web developer based in Oslo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>

      <main className="relative flex">
        <div className="hidden 3xl:block flex-1 relative">
          <div className="sticky top-4 left-4 w-full">
            <Image
              src={linux}
              alt="Picture of me in Berlin"
              objectFit="cover"
              layout="responsive"
              className=""
              quality={80}
              objectPosition="center"
            />
          </div>
        </div>
        <div className="max-w-[2560px] w-screen">
          <Hero />
          <AboutMeSection />
          <CurvyEnd />
          <div className="w-full -mt-5" />
          <Proficiencies />
          <div className="w-full py-10" />
          <Experience />
          <CurvyEnd flipped />
          <div className="w-full md:p-20 bg-primary" />
        </div>
        <div className="hidden 3xl:block flex-1 relative">
          <div className="sticky top-4 right-4 w-full">
            <Image
              src={gatsby}
              alt="Picture of me in Berlin"
              objectFit="cover"
              layout="responsive"
              quality={80}
              objectPosition="center"
            />
          </div>
        </div>
      </main>

      <footer></footer>
    </>
  )
}

export default Home
