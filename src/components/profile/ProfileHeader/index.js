import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { useGetProfile } from '@/api'
import { useAuth } from '@/hooks/query/auth'
import { cn } from '@/utils'

import ProfileImage from '../ProfileImage'
import DesktopUserStatistics from './DesktopUserStatistics'
import MobileUserStatistics from './MobileUserStatistics'
import MyProfileSettings from './MyProfileSettings'
import UserProfileSettings from './UserProfileSettings'

const ProfileInfo = ({ user }) => {
  const router = useRouter()
  const { user: authUser } = useAuth()
  const { id } = router.query
  const isMe = useMemo(() => authUser?.username === id, [authUser, id])

  return (
    <div className="flex flex-col sm:flex-grow-[2] sm:basis-[30px]">
      <div className="mb-3 flex flex-wrap items-center gap-x-4 sm:mb-6 md:flex-nowrap">
        <h1 className={cn('text-xl', isMe && 'order-1')}>{user?.username || 'username'}</h1>
        {isMe ? <MyProfileSettings /> : <UserProfileSettings user={user} />}
      </div>
      <DesktopUserStatistics user={user} />
      <p className="hidden text-sm font-semibold sm:block">{user?.name}</p>
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
        <p className="mt-6 text-sm font-semibold sm:hidden">{user?.name}</p>
      </div>
      <MobileUserStatistics user={user} />
    </div>
  )
}

export default ProfileHeader
