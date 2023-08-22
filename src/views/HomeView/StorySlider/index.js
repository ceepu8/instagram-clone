import { Pressable } from '@react-aria/interactions'
import Image from 'next/image'
import { useEffect, useState } from 'react'
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
  const rootArrowStyle = 'border-[0.5px] border-anti-flash-gray shadow-55 disabled:hidden'

  const nextArrow = (
    <button className={cn(rootArrowStyle, arrowClassname)} type="button">
      <ChevronRight size={22} currentColor="var(--anti-flash-gray)" />
    </button>
  )

  const prevArrow = (
    <button className={cn(rootArrowStyle, arrowClassname)} type="button">
      <ChevronLeft size={22} currentColor="var(--anti-flash-gray)" />
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

const StoryItemSkeleton = ({ item, length }) => {
  const delay = item * 200
  const duration = 200 * length

  return (
    <div
      style={{ animationDelay: `${delay}ms`, animationDuration: `${duration}ms` }}
      className="mx-auto h-[62px] w-[62px] animate-pulse rounded-full border-[0.5px] border-chinese-silver bg-bright-gray opacity-75"
    />
  )
}

const StoryItem = ({ user, active = true }) => {
  const activeStyle = active
    ? { background: 'linear-gradient(45deg, #ffd600, #ff7a00, #ff0069, #d300c5, #7638fa)' }
    : { background: 'var(--chinese-silver)' }

  return (
    <Pressable onPress={() => {}}>
      <div className="flex cursor-pointer flex-col space-y-1 overflow-auto py-1">
        <div className="relative mx-auto rounded-full">
          <div className="absolute -inset-0.5 rounded-full" style={activeStyle} />
          <div className="relative rounded-full">
            <Image
              src={user?.image || Assets.COMMON.PLACEHOLDER}
              width={58}
              height={58}
              alt="story-image"
              className="rounded-full border-2 border-background "
            />
          </div>
        </div>
        <p className="truncate text-xs">{user?.username || 'username123123'}</p>
      </div>
    </Pressable>
  )
}

const StoryList = ({ loading }) => {
  const renderItem = (_) => (
    <div key={_} className="flex justify-center">
      {loading ? <StoryItemSkeleton /> : <StoryItem />}
    </div>
  )
  return (
    <Slideshow
      transitionDuration={300}
      autoplay={false}
      slidesToShow={8}
      slidesToScroll={4}
      rootClass="mx-auto"
      width="var(--desktop-home-story)"
      infinite={false}
      arrowClassname="top-6 bg-popover rounded-full border-philippine-gray border-none"
    >
      {Array(16).fill('').map(renderItem)}
    </Slideshow>
  )
}

const StorySlider = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="mx-auto w-full pt-12">
      <div className="relative flex h-[100px] w-full max-w-[var(--desktop-home-story)] justify-between">
        <StoryList loading={isLoading} />
      </div>
    </div>
  )
}

export default StorySlider
