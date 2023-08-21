import React from 'react'

import { Button, HoverCard } from '@/components/base'
import { ProfileAvatar } from '@/components/profile'
import { CardProfilePreview } from '@/components/shared'
import { useAuth } from '@/hooks/query/auth'

import FeedSidebarFooter from './FeedSidebarFooter'

const PreviewProfileHoverCard = ({ trigger }) => {
  return (
    <HoverCard trigger={trigger}>
      <CardProfilePreview />
    </HoverCard>
  )
}

const SuggestProfile = () => {
  return (
    <div className="flex items-center gap-x-2">
      <PreviewProfileHoverCard
        trigger={
          <div className="cursor-pointer">
            <ProfileAvatar size="xs" />
          </div>
        }
      />
      <div className="flex flex-1 flex-col">
        <PreviewProfileHoverCard
          trigger={<p className="cursor-pointer text-sm font-bold">username1</p>}
        />
        <span className="text-xs text-comment">Suggested for you</span>
      </div>
      <Button variant="link" size="text" className="text-xs">
        Switch
      </Button>
    </div>
  )
}

const MyProfile = () => {
  const { user } = useAuth()

  return (
    <div className="flex items-center gap-x-2">
      <ProfileAvatar size="sm" />
      <div className="flex flex-1 flex-col">
        <p className="cursor-pointer text-sm font-bold">{user?.username}</p>
        <span className="cursor-pointer text-sm text-comment">{user?.name}</span>
      </div>
      <Button variant="link" size="text" className="text-xs">
        Switch
      </Button>
    </div>
  )
}

const FeedSidebar = () => {
  return (
    <div className="flex flex-col gap-y-6 pt-14">
      <MyProfile />
      <div className="flex flex-col gap-y-4">
        <div className="flex justify-between">
          <p className="text-sm font-bold text-comment">Suggested for you</p>
          <Button variant="ghost" size="text" className="text-xs">
            See all
          </Button>
        </div>
        <div className="flex flex-col gap-y-2">
          <SuggestProfile />
          <SuggestProfile />
          <SuggestProfile />
        </div>
      </div>
      <FeedSidebarFooter />
    </div>
  )
}

export default FeedSidebar
