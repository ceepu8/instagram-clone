import { Transition } from '@headlessui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useMemo, useState } from 'react'

import { useGetProfile } from '@/api'
import { useFollow, useIsFollow, useUnfollow } from '@/api/follow'
import { Button, LineBreak } from '@/components/base'
import Dialog, { DialogTrigger, DialogContent, DialogClose } from '@/components/base/Dialog'
import {
  ChevronDown,
  MoreHorizontalIcon,
  SettingsIcon,
  UserPlusIcon,
  XIcon,
} from '@/components/icons'
import Assets from '@/constants/Assets'
import { useAuth } from '@/hooks/query/auth'
import { cn } from '@/utils'

const MobileUserActivities = (props) => {
  const { user } = props || {}
  return (
    <ul className="items-center space-x-10 mb-4 hidden sm:flex">
      <li>
        <b>{user?.posts?.length || 0}</b> posts
      </li>
      <li>
        <b>{user?.followers?.length || 0}</b> followers
      </li>
      <li>
        <b>{user?.followings?.length || 0}</b> followings
      </li>
    </ul>
  )
}

const DesktopUserActivities = (props) => {
  const { user } = props || {}

  return (
    <ul className="flex items-center text-center border-t border-b border-divide py-2 sm:hidden">
      <li className="flex-1">
        <b>{user?.posts?.length || 0}</b>
        <p className="text-comment">posts</p>
      </li>
      <li className="flex-1">
        <b>{user?.followers?.length || 0}</b>
        <p className="text-comment">followers</p>
      </li>
      <li className="flex-1">
        <b>{user?.followings?.length || 0}</b>
        <p className="text-comment">followings</p>
      </li>
    </ul>
  )
}

const ProfileImage = ({ image }) => {
  return (
    <div className="sm:flex-grow-[1] sm:basis-0 shrink-0 mr-8 sm:mr-0">
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

const MyProfileSettings = () => {
  return (
    <>
      <Button
        variant="secondary"
        size="small"
        rootClassName="order-last md:order-2 mt-4 md:mt-0 w-full md:w-auto"
      >
        Edit profile
      </Button>
      <Button
        icon={SettingsIcon}
        variant="text-secondary"
        size="small"
        rootClassName="order-3 md:order-last"
      />
    </>
  )
}

const FollowingButton = ({ loading = false }) => {
  return (
    <DialogTrigger>
      <div className="w-[122px] h-[32px]">
        <Button variant="secondary" size="small" icon={ChevronDown} loading={loading}>
          Following
        </Button>
      </div>
    </DialogTrigger>
  )
}

const FollowingDialog = ({ user, loading }) => {
  const [open, setOpen] = useState(false)
  const { doUnfollow, isSuccess, isLoading: isDoFollowLoading } = useUnfollow()

  const handleUnfollow = () => {
    if (!user?.id) return
    doUnfollow({ id: user.id })
  }

  return (
    <Dialog isOpen={open} onClose={setOpen} trigger={<FollowingButton loading={loading} />}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-100"
        enterFrom="opacity-0 scale-110"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-110"
      >
        <DialogContent className="min-w-[420px]">
          <DialogClose className="absolute right-2 top-2">
            <Button variant="text-secondary" icon={XIcon} />
          </DialogClose>
          <div className="py-4">
            <div className="text-center">
              <Image
                className="rounded-full border border-chinese-silver mx-auto"
                width={60}
                height={60}
                src={user?.image || Assets.COMMON.PLACEHOLDER}
                alt="Profile Image"
              />
              <p className="text-sm font-bold">{user?.username || 'username'}</p>
            </div>
            <LineBreak />

            <div>
              <Button
                variant="text-secondary"
                fullWidth
                size="small"
                rootClassName="justify-start font-medium px-4 py-3"
                onClick={handleUnfollow}
              >
                Unfollow
              </Button>
            </div>
          </div>
        </DialogContent>
      </Transition.Child>
    </Dialog>
  )
}

const UserProfileSettings = ({ user }) => {
  const { doFollow, isSuccess, isLoading: isDoFollowLoading } = useFollow()
  const { data, isLoading: isGetFollowLoading } = useIsFollow(user?.id)

  const handleFollow = () => {
    if (!user?.id || data?.is_following) return
    doFollow({ id: user.id })
  }

  const followButton = useMemo(() => {
    if (data?.is_following) {
      return <FollowingDialog user={user} loading={isDoFollowLoading || isGetFollowLoading} />
    }

    return (
      <div className="w-[77px] h-[32px]">
        <Button
          variant="primary"
          size="small"
          onClick={handleFollow}
          fullWidth
          loading={isDoFollowLoading || isGetFollowLoading}
          rootClassName="h-full"
        >
          Follow
        </Button>
      </div>
    )
  }, [data?.is_following, isDoFollowLoading, isGetFollowLoading])

  return (
    <>
      <div className="flex items-center space-x-2 md:space-x-4 basis-full md:basis-auto md:mt-0 mt-4 order-3 md:order-2">
        {followButton}
        <Button variant="secondary" size="small">
          Message
        </Button>
        <Button variant="secondary" icon={UserPlusIcon} size="small" rootClassName="w-8 h-8" />
      </div>
      <Button
        icon={MoreHorizontalIcon}
        variant="text-secondary"
        rootClassName="order-1 md:order-2"
      />
    </>
  )
}

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
        <div className="flex">
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
