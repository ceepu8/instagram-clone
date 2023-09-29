import Image from 'next/image'
import { useRouter } from 'next/router'

import { useGetProfile } from '@/apis'
import Assets from '@/constants/Assets'
import { useIsMe } from '@/hooks/custom'
import { cn } from '@/utils'

import DesktopUserStatistics from './DesktopUserStatistics'
import MobileUserStatistics from './MobileUserStatistics'
import MyProfileSettings from './MyProfileSettings'
import UserProfileSettings from './UserProfileSettings'

const ProfileInfo = ({ user }) => {
  const router = useRouter()
  const { username } = router.query
  const isMe = useIsMe(username)

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
  const { data: user } = useGetProfile(router.query?.username)

  return (
    <div>
      <div className="px-5 py-8">
        <div className="flex">
          <div className="mr-8 shrink-0 sm:mr-0 sm:flex-grow-[1] sm:basis-0">
            <div className="relative mx-auto h-[70px] w-[70px] sm:h-[150px] sm:w-[150px]">
              <Image
                className="rounded-full border border-chinese-silver"
                fill
                src={user?.image || Assets.COMMON.PLACEHOLDER}
                alt="Profile Image"
              />
            </div>
          </div>
          <ProfileInfo user={user} />
        </div>
        <p className="mt-6 text-sm font-semibold sm:hidden">{user?.name}</p>
      </div>
      <MobileUserStatistics user={user} />
    </div>
  )
}

export default ProfileHeader
