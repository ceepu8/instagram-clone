import Image from 'next/image'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import { ChevronLeft, ChevronRight } from '@/components/icons'
import { cn } from '@/utils'

const Slideshow = ({
  items = [],
  show: Show = Slide,
  duration = 2000,
  transitionDuration = 1000,
  defaultIndex = 0,
  indicators = false,
  autoplay = true,
  infinite = true,
  pauseOnHover = true,
  canSwipe = false,
  arrows = true,
  cssClass = '',
  rootClass = '',
  onChange = () => {},
  onStartChange = () => {},
  width,
  arrowClassname,
}) => {
  const nextArrow = (
    <button className={cn(arrowClassname)} type="button">
      <ChevronRight />
    </button>
  )
  const prevArrow = (
    <button className={cn(arrowClassname)} type="button">
      <ChevronLeft />
    </button>
  )

  const slideProps = {
    duration,
    transitionDuration,
    defaultIndex,
    indicators,
    prevArrow,
    nextArrow,
    arrows,
    autoplay,
    infinite,
    pauseOnHover,
    canSwipe,
    easing: 'linear',
    cssClass,
    onStartChange,
    onChange,
  }

  return (
    <div style={{ maxWidth: width }} className={cn('w-full', rootClass)}>
      <Show {...slideProps}>
        {items.map((fadeImage) => (
          <div key={fadeImage.url}>
            <Image width={width} height={1200} src={fadeImage.url} alt="show-image" />
          </div>
        ))}
      </Show>
    </div>
  )
}

export default Slideshow
