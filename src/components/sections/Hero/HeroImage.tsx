import Image from 'next/image'
import ResponsiveSVG from '@components/ResponsiveSVG'
import { forwardRef } from 'react'

type Props = {
  heroImg: `hero-${number}.jpg`
}

const HeroImage = forwardRef(({ heroImg = 'hero-0.jpg' }: Props, ref) => {
  console.log(heroImg)
  return (
    <div className="flex relative w-full h-screen">
      <Image
        src={`/${heroImg}`}
        alt="Picture of me in Berlin"
        objectFit="cover"
        layout="fill"
        quality={80}
        className="absolute"
        objectPosition="center"
      />
      {ref && (
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
            className="fill-accent/0 translate-y-10 translate-x-10"
            // style="fill:rgb(235,235,235);"
          />
        </ResponsiveSVG>
      )}
    </div>
  )
})

HeroImage.displayName = 'HeroImage'

export default HeroImage
