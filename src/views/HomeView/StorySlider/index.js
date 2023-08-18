import { Pressable } from '@react-aria/interactions'
import Image from 'next/image'
import { Slide } from 'react-slideshow-image'

import { ChevronLeft, ChevronRight } from '@/components/icons'
import Assets from '@/constants/Assets'
import { cn } from '@/utils'

const Slideshow = ({
  children,
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
  slidesToScroll = 2,
  slidesToShow = 2,
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
    indicators,
    duration,
    transitionDuration,
    defaultIndex,
    prevArrow,
    nextArrow,
    arrows,
    autoplay,
    infinite,
    pauseOnHover,
    canSwipe,
    easing: 'linear',
    cssClass,
    slidesToScroll,
    slidesToShow,
    onStartChange,
    onChange,
  }

  return (
    <div style={{ maxWidth: width }} className={cn('w-full', rootClass)}>
      <Show {...slideProps}>{children}</Show>
    </div>
  )
}

const StoryItem = ({ index, user, active = true }) => {
  const activeStyle = active
    ? { background: 'linear-gradient(45deg, #ffd600, #ff7a00, #ff0069, #d300c5, #7638fa)' }
    : { background: 'var(--chinese-silver)' }

  return (
    <Pressable onPress={() => {}}>
      <div className="flex max-w-[70px] cursor-pointer flex-col space-y-1 overflow-auto py-1">
        <div className="relative mx-auto w-fit rounded-full">
          <div className="absolute -inset-0.5 rounded-full" style={activeStyle} />
          <div className="relative h-[58px] w-[58px] rounded-full">
            <Image
              src={user?.image || Assets.COMMON.PLACEHOLDER}
              fill
              alt="story-image"
              className="rounded-full border-2 border-background"
            />
          </div>
        </div>
        <p className="truncate text-xs">{user?.username || 'username123123'}</p>
        <span>{index}</span>
      </div>
    </Pressable>
  )
}

const StorySlider = () => {
  return (
    <Slideshow
      transitionDuration={300}
      autoplay={false}
      slidesToShow={8}
      slidesToScroll={8}
      rootClass="mx-auto"
      width={680}
      infinite={false}
      arrowClassname="top-6 bg-popover rounded-full border-philippine-gray border-[0.25px]"
    >
      {Array(8)
        .fill('')
        .map((_) => (
          <div key={_} className="flex justify-center">
            <StoryItem alt="show-image" />
          </div>
        ))}
    </Slideshow>
  )
}

export default StorySlider
