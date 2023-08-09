import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { useGetProfile } from '@/api'
import { useAuth } from '@/hooks/query/auth'
import { cn } from '@/utils'

import ProfileImage from '../ProfileImage'
import DesktopUserActivities from './DesktopUserActivities'
import MobileUserActivities from './MobileUserActivities'
import MyProfileSettings from './MyProfileSettings'
import UserProfileSettings from './UserProfileSettings'

const ProfileInfo = ({ user }) => {
  const router = useRouter()
  const { user: authUser } = useAuth()
  const { id } = router.query
  const isMe = useMemo(() => authUser?.username === id, [authUser, id])

  return (
    <div className="flex flex-col sm:flex-grow-[2] sm:basis-[30px]">
      <div className="flex items-center gap-x-4 mb-3 sm:mb-6 flex-wrap md:flex-nowrap">
        <h1 className={cn('text-xl', isMe && 'order-1')}>{user?.username || 'username'}</h1>
        {isMe && <MyProfileSettings />}
        {!isMe && <UserProfileSettings user={user} />}
      </div>
      <DesktopUserActivities user={user} />
      <p className="text-sm font-semibold hidden sm:block">Description</p>
    </div>
  )
}

const ProfileHeader = () => {
  const router = useRouter()
  const { data: user } = useGetProfile(router.query.id)

  return (
    <div>
      <div className="px-5 py-8">
        <div className="flex">
          <ProfileImage image={user?.image} />
          <ProfileInfo user={user} />
        </div>
        <p className="text-sm font-semibold mt-6 sm:hidden">Description</p>
      </div>
      <MobileUserActivities user={user} />
    </div>
  )
}

export default ProfileHeader
