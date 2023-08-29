import { Pressable } from '@react-aria/interactions'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Swiper } from '@/components/base'

import ProfileStoryAddButton from './ProfileStoryAddButton'

const StoryItem = ({ name, image, active = true }) => {
  const activeStyle = { background: 'var(--chinese-silver)' }

  return (
    <Pressable onPress={() => {}}>
      <div className="flex w-[72.5px] shrink-0 cursor-pointer flex-col space-y-1 overflow-auto py-1 md:w-[115px]">
        <div className="relative mx-auto rounded-full">
          <div className="absolute -inset-px rounded-full" style={activeStyle} />
          <div className="relative h-14 w-14 rounded-full md:h-[77px] md:w-[77px]">
            <Image
              src={image || '/guinea-pig-2.jpeg'}
              fill
              alt="story-image"
              className="rounded-full border-2 border-background"
            />
          </div>
        </div>
        <p className="truncate text-center text-xs font-bold">{name || '2023'}</p>
      </div>
    </Pressable>
  )
}

const StoryItemSkeleton = ({ item, length }) => {
  const delay = item * 200
  const duration = 200 * length

  return (
    <div
      style={{ animationDelay: `${delay}ms`, animationDuration: `${duration}ms` }}
      className="mx-auto h-[79px] w-[79px] animate-pulse rounded-full border-[0.5px] border-chinese-silver bg-bright-gray opacity-75"
    />
  )
}

const ProfileStory = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([
    {
      name: '2023',
      image: '/guinea-pig-1.jpeg',
      stories: [],
    },
    {
      name: '2023',
      image: '/guinea-pig-2.jpeg',
      stories: [],
    },
    {
      name: '2021',
      image: '/guinea-pig-3.jpeg',
      stories: [],
    },
  ])

  const handleAddStoryHighlight = (newData) => {
    setData((prev) => ({ ...prev, newData }))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="py-4 md:mb-14 md:px-16">
      <div className="relative flex w-full justify-between">
        <Swiper>
          {data.map((item) => {
            return <StoryItem key={item.name} {...item} />
          })}
          <ProfileStoryAddButton handleAddStoryHighlight={handleAddStoryHighlight} />
        </Swiper>
      </div>
    </div>
  )
}

export default ProfileStory
