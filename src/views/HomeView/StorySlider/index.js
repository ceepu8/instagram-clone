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
  const nextArrow = (
    <button className={cn('shadow-55', arrowClassname)} type="button">
      <ChevronRight size={22} currentColor="var(--anti-flash-gray)" />
    </button>
  )
  const prevArrow = (
    <button className={cn('shadow-55', arrowClassname)} type="button">
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

const StoryItemSkeleton = ({ item }) => {
  const delay = item * 200

  return (
    <div
      style={{ animationDelay: `${delay}ms`, animationDuration: '1600ms' }}
      className="mx-auto h-[62px] w-[62px] animate-pulse rounded-full border-[0.5px] border-chinese-silver bg-bright-gray opacity-75"
    />
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

const StoryList = () => {
  return (
    <div className="relative h-[100px] w-full">
      <Slideshow
        transitionDuration={300}
        autoplay={false}
        slidesToShow={8}
        slidesToScroll={4}
        rootClass="mx-auto"
        width={640}
        infinite={false}
        arrowClassname="top-6 bg-popover rounded-full border-philippine-gray border-none"
      >
        {Array(16)
          .fill('')
          .map((_) => (
            <div key={_} className="flex justify-center">
              <StoryItem />
            </div>
          ))}
      </Slideshow>
    </div>
  )
}

const StorySlider = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex w-full flex-col pt-12">
      {isLoading && (
        <div className="mx-auto flex h-[100px] w-full max-w-[640px] justify-between">
          {Array(8)
            .fill('')
            .map((_, index) => (
              <StoryItemSkeleton key={_} item={index} />
            ))}
        </div>
      )}

      {!isLoading && <StoryList />}
    </div>
  )
}

export default StorySlider
