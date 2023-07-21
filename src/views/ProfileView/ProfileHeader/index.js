import Image from 'next/image'
import { useRouter } from 'next/router'

import { useGetProfile } from '@/api'
import { Button } from '@/components/base'
import { SettingsIcon } from '@/components/icons'
import Assets from '@/constants/Assets'

const MobileUserActivities = (props) => {
  const { user } = props || {}
  return (
    <ul className="items-center space-x-10 mb-4 hidden sm:flex">
      <li>
        <b>{user?.posts?.length}</b> posts
      </li>
      <li>
        <b>{user?.followers?.length}</b> followers
      </li>
      <li>
        <b>{user?.followings?.length}</b> followings
      </li>
    </ul>
  )
}

const DesktopUserActivities = (props) => {
  const { user } = props || {}

  return (
    <ul className="flex items-center text-center border-t border-b border-divide py-2 sm:hidden">
      <li className="flex-1">
        <b>{user?.posts?.length}</b>
        <p className="text-comment">posts</p>
      </li>
      <li className="flex-1">
        <b>{user?.followers?.length}</b>
        <p className="text-comment">followers</p>
      </li>
      <li className="flex-1">
        <b>{user?.followings?.length}</b>
        <p className="text-comment">followings</p>
      </li>
    </ul>
  )
}

const ProfileImage = ({ image }) => {
  return (
    <div className="sm:flex-grow-[1] mr-8 sm:mr-0">
      <div className="w-[70px] h-[70px] sm:w-[150px] sm:h-[150px] relative mx-auto">
        <Image
          className="rounded-full border border-chinese-silver"
          fill
          src={image || Assets.COMMON.PLACEHOLDER}
          alt="Profile Image"
        />
      </div>
    </div>
  )
}

const ProfileInfo = ({ user }) => {
  return (
    <div className="flex flex-col sm:flex-grow-[2]">
      <div className="flex items-center gap-x-4 mb-3 sm:mb-6 flex-wrap md:flex-nowrap">
        <h1 className="text-xl order-1">{user?.username}</h1>
        <Button
          variant="secondary"
          size="small"
          rootClassName="order-last md:order-2 mt-4 md:mt-0 w-full md:w-[100px]"
        >
          Edit profile
        </Button>
        <Button
          icon={SettingsIcon}
          variant="text-secondary"
          rootClassName="order-3 md:order-last"
        />
      </div>
      <MobileUserActivities user={user} />
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
        <div className="flex sm:justify-center sm:mx-8">
          <ProfileImage image={user?.image} />
          <ProfileInfo user={user} />
        </div>
        <p className="text-sm font-semibold mt-6 sm:hidden">Description</p>
      </div>
      <DesktopUserActivities user={user} />
    </div>
  )
}

export default ProfileHeader
