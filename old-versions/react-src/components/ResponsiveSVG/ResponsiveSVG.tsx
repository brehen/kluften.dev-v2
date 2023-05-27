import { forwardRef, ReactNode, Ref } from 'react'
import type { PreserveAspectRatio } from './types'

export interface Point {
  x: number
  y: number
}

export interface ResponsiveSVGProps {
  width: number
  height: number
  origin?: Point
  preserveAspectRatio?: PreserveAspectRatio
  //	innerRef?: // Ref<SVGSVGElement>
  className?: string
  hide?: boolean
  children: ReactNode
}

const ResponsiveSVG = forwardRef(
  (
    {
      height,
      width,
      children,
      origin = { x: 0, y: 0 },
      preserveAspectRatio = 'xMaxYMid meet',
      className,
    }: ResponsiveSVGProps,
    ref,
  ) => {
    const aspect = width / height

    const adjustedHeight = Math.ceil(width / aspect)

    return (
      <svg
        className={className}
        preserveAspectRatio={preserveAspectRatio}
        viewBox={`${origin.x} ${origin.y} ${width} ${adjustedHeight}`}
        ref={ref as any}
      >
        {children}
      </svg>
    )
  },
)

ResponsiveSVG.displayName = 'ResponsiveSVG'

export default ResponsiveSVG
