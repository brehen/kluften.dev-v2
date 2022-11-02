import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Hero from '@components/sections/Hero'
import AboutMeSection from '@components/sections/AboutMeSection'
import Proficiencies from '@components/sections/Proficiencies'
import linux from '../../public/linux-3.png'
import gatsby from '../../public/gatsby-3.png'
import nekoKill from '../../public/neko-kill.png'
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

      <main className="relative flex">
        <div className="hidden 3xl:block flex-1 relative">
          <div className="sticky top-4 left-4 h-full max-h-screen w-full flex flex-col justify-between">
            <Image
              src={linux}
              alt="Gato numero uno"
              objectFit="cover"
              layout="responsive"
              className=""
              quality={50}
              objectPosition="center"
            />
            <Image
              src={nekoKill}
              alt="Gato numero tres"
              objectFit="cover"
              layout="responsive"
              className=""
              quality={50}
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
          <CurvyEnd className="rotate-x-180" />
          <div className="w-full md:p-20 bg-primary" />
        </div>
        <div className="hidden 3xl:block flex-1 relative">
          <div className="sticky top-4 left-4 h-full max-h-screen w-full flex flex-col justify-between">
            <Image
              src={gatsby}
              alt="Gato numero dos"
              objectFit="cover"
              layout="responsive"
              quality={50}
              objectPosition="center"
            />
            <Image
              src={nekoKill}
              alt="Gato numero tres"
              objectFit="cover"
              layout="responsive"
              className=""
              quality={50}
              style={{
                transform: 'rotateY(180deg)',
              }}
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
