import { isClient } from '@utils/environment'
import { useRef } from 'react'
import Xarrow from 'react-xarrows'
import HeroImage from './HeroImage'

const Hero = () => {
  const ref = useRef(null)
  return (
    <section className="relative w-full h-screen">
      <HeroImage />
      <div className="absolute inset-0 flex items-center justify-center prose-xl text-white font-fancy bg-slate-900/80">
        <div className="w-10/12 md:w-7/12 cursor-default pr-14 pt-10 md:p-0 z-50">
          <div className="w-20 h-20" ref={ref}></div>
          <div className="pb-">I&apos;m</div>
          <h1 className="hero-heading">Marius Nilsen Kluften</h1>
          <h2 className="flex flex-wrap mt-8">
            <span className="border-b-x">
              A
              <div className="mx-3 inline-block hover:animate-ping text-main bg-white px-1">
                web
              </div>
              developer based in Oslo.
            </span>
            <span>
              Working for DrDropin, crafting
              <div className="mx-3 hover:motion-safe:animate-spin  mr-2 text-accent inline-block  bg-white transition px-1">
                <span className="block">sweet</span>
              </div>
              web apps.
            </span>
          </h2>
        </div>
        {isClient && (
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
