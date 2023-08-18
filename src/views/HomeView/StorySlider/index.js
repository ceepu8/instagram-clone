import { Pressable } from '@react-aria/interactions'
import Image from 'next/image'

import Assets from '@/constants/Assets'

const StoryItem = ({ user, active = true }) => {
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
      </div>
    </Pressable>
  )
}

const StorySlider = () => {
  return (
    <div className="flex space-x-2">
      {Array(8)
        .fill('')
        .map((index) => (
          <StoryItem key={index} />
        ))}
    </div>
  )
}

export default StorySlider
