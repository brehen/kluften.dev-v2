import useBreakpoint from '@hooks/useBreakpoint'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'
import classNames from 'classnames'

type Props = {
  children: ReactNode | ReactNode[]
  bg?: 'primary'
  className?: string
  id?: string
  yOffset?: number
}

export default function SectionWrapper({
  children,
  bg,
  className,
  id,
  yOffset = -150,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  console.log(containerRef)
  const { isMd } = useBreakpoint('md')
  const boxVariants = {
    visible: { opacity: 1, y: isMd ? yOffset : 0 },
    hidden: { opacity: 0, y: 0 },
  }
  const isInView = useInView(containerRef)
  console.log(isInView)
  const control = useAnimation()
  useEffect(() => {
    if (isInView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, isInView])
  return (
    <section
      className={classNames(
        {
          'bg-primary': bg === 'primary',
        },
        'flex justify-center w-full',
        className,
      )}
    >
      <div id={id} className="mt-1" ref={containerRef} />
      <motion.div
        variants={boxVariants}
        initial="hidden"
        animate={control}
        className="p-1.5 bg-accent md:w-3/4 max-w-3xl flex"
      >
        <div className="p-12 px-8 bg-white shadow-lg w-full">{children}</div>
      </motion.div>
    </section>
  )
}
