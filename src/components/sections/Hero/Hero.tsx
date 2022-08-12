import { isClient } from '@utils/environment'
import { useRef, useState } from 'react'
import Xarrow from 'react-xarrows'
import HeroImage from './HeroImage'

const getNewRandomNumber = (prev?: number): number => {
  const random = Math.floor(Math.random() * 8)
  if (random === prev) return getNewRandomNumber(prev)
  return random
}

const Hero = () => {
  const ref = useRef(null)
  const [randomHero, setRandomHero] = useState(getNewRandomNumber())

  const shuffleHero = () => {
    setRandomHero(getNewRandomNumber)
  }

  return (
    <section className="relative w-full h-screen">
      <HeroImage heroImg={`hero-${randomHero}.jpg`} />
      <div className="absolute z-40 top-0 left-0">
        <button
          className="btn-accent btn line-none"
          title="Click me to shuffle the hero image"
          onClick={shuffleHero}
        >
          🎲
        </button>
      </div>
      <div className="absolute inset-0 flex items-center justify-center prose-xl text-white font-fancy bg-slate-900/80">
        <div className="w-10/12 md:w-7/12 cursor-default pr-14 pt-10 md:p-0 z-50">
          <div className="w-20 h-20" ref={ref}></div>
          <h1 className="hero-heading">I&apos;m Marius Nilsen Kluften.</h1>
          <h2 className="flex flex-wrap flex-col mt-8">
            <span className="border-b-x">
              A
              <span className="mx-3 inline-block hover:animate-ping text-main bg-white px-1">
                web
              </span>
              developer based in Oslo.
            </span>
            <span>
              Working for Dr.Dropin, crafting
              <span className="mx-3 hover:motion-safe:animate-spin  mr-2 text-accent inline-block  bg-white transition px-1">
                <span className="block">sweet</span>
              </span>
              web apps.
            </span>
          </h2>
        </div>
        {isClient && false && (
          <Xarrow
            start={ref}
            end="my-face"
            endAnchor="top"
            startAnchor="right"
            animateDrawing={0.8}
            _cpx1Offset={100}
            _cpy1Offset={-200}
            _cpy2Offset={-100}
          />
        )}
      </div>
    </section>
  )
}

export default Hero
