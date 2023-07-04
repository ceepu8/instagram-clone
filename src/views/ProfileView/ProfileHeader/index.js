import Image from 'next/image'

import { useGetProfile } from '@/api'
import { Button } from '@/components/base'
import { SettingsIcon } from '@/components/icons'
import Assets from '@/constants/Assets'

const ProfileHeader = () => {
  const { data: user } = useGetProfile()

  return (
    <div className="flex gap-x-24">
      <Image
        className="rounded-full border border-chinese-silver"
        width={150}
        height={150}
        src={user?.image || Assets.COMMON.PLACEHOLDER}
        alt="Profile Image"
      />
      <div className="flex flex-col">
        <div className="flex items-center gap-x-4 mb-6">
          <h1 className="text-xl">{user?.name}</h1>
          <Button variant="secondary" size="small">
            Edit profile
          </Button>
          <Button icon={SettingsIcon} variant="text-secondary" />
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <span>
            <b>{user?.posts?.length}</b> posts
          </span>
          <span>
            <b>{user?.followers?.length}</b> followers
          </span>
          <span>
            <b>{user?.followings?.length}</b> followings
          </span>
        </div>
        <p className="text-sm font-semibold">Description</p>
      </div>
    </div>
  )
}

export default ProfileHeader
