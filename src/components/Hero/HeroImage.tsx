import Image from 'next/image'
import heroImage from '../../../public/hero-background.jpeg'
import ResponsiveSVG from '@components/ResponsiveSVG'
import { forwardRef } from 'react'

const HeroImage = forwardRef((_props, ref) => {
  return (
    <div className="flex relative w-screen h-screen">
      <Image
        src={heroImage}
        alt="Picture of me in Berlin"
        objectFit="cover"
        layout="fill"
        className="absolute"
        objectPosition="center"
      />
      <ResponsiveSVG
        ref={ref}
        className="absolute inset-0 w-full h-full"
        width={1709}
        height={1282}
        preserveAspectRatio="xMidYMid slice"
      >
        <ellipse
          id="my-face"
          cx="1120.81"
          cy="602.186"
          rx="116.487"
          ry="130.251"
          className="fill-accent/50 translate-y-10 translate-x-10"
          // style="fill:rgb(235,235,235);"
        />
      </ResponsiveSVG>
    </div>
  )
})

HeroImage.displayName = 'HeroImage'

export default HeroImage
