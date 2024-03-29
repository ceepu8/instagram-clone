import { useRouter } from 'next/router'

import { useGetProfile } from '@/apis'
import Assets from '@/constants/Assets'
import { useIsMe } from '@/hooks/custom'
import { cn } from '@/utils'

import DesktopUserStatistics from './DesktopUserStatistics'
import MobileUserStatistics from './MobileUserStatistics'
import MyProfileSettings from './MyProfileSettings'
import ProfileImage from './ProfileImage'
import UserProfileSettings from './UserProfileSettings'

const ProfileInfo = ({ user }) => {
  const router = useRouter()
  const { username } = router.query
  const isMe = useIsMe(username)

  return (
    <div>
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
    <section>
      <div className="px-5 py-8">
        <div className="flex">
          <div className="mr-8 shrink-0 sm:mr-0 sm:flex-grow-[1]">
            <ProfileImage image={user?.image || Assets.COMMON.PLACEHOLDER} />
          </div>
          <div className="flex flex-col sm:flex-grow-[2]">
            <ProfileInfo user={user} />
          </div>
        </div>
        <p className="mt-6 text-sm font-semibold sm:hidden">{user?.name}</p>
      </div>
      <MobileUserStatistics user={user} />
    </section>
  )
}

export default ProfileHeader
