import { Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'

import { useFollow, useIsFollow, useUnfollow } from '@/api/follow'
import { Button, LineBreak } from '@/components/base'
import Dialog, { DialogClose, DialogContent, DialogTrigger } from '@/components/base/Dialog'
import { ChevronDown, MoreHorizontalIcon, UserPlusIcon, XIcon } from '@/components/icons'
import Assets from '@/constants/Assets'

const FollowButton = ({ loading, onClick }) => {
  return (
    <div className="w-[77px] h-[32px]">
      <Button
        variant="primary"
        size="small"
        onClick={onClick}
        fullWidth
        loading={loading}
        rootClassName="h-full"
      >
        Follow
      </Button>
    </div>
  )
}

const FollowingButton = ({ user, loading, doUnfollow }) => {
  const [open, setOpen] = useState(false)

  const handleUnfollow = () => {
    if (!user?.id) return
    setOpen(false)
    doUnfollow({ id: user.id })
  }

  const trigger = (
    <DialogTrigger>
      <div className="w-[122px] h-[32px]">
        <Button variant="secondary" size="small" fullWidth loading={loading}>
          Following <ChevronDown className="w-4 h-4 shrink-0" />
        </Button>
      </div>
    </DialogTrigger>
  )

  return (
    <Dialog isOpen={open} onClose={setOpen} trigger={trigger}>
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
        </DialogContent>
      </Transition.Child>
    </Dialog>
  )
}

const ToggleFollow = ({
  user,
  isUnfollowLoading,
  doUnfollow,
  isFollowing,
  isDoFollowLoading,
  handleFollow,
}) => {
  if (!isFollowing) {
    return <FollowButton loading={isDoFollowLoading} onClick={handleFollow} />
  }

  return <FollowingButton user={user} loading={isUnfollowLoading} doUnfollow={doUnfollow} />
}

const UserProfileSettings = ({ user }) => {
  const { doFollow, isLoading: isDoFollowLoading } = useFollow(user)
  const { doUnfollow, isLoading: isUnfollowLoading } = useUnfollow(user)

  const handleFollow = () => {
    if (!user?.id || user?.follow_by_viewer) return
    doFollow()
  }

  return (
    <>
      <div className="flex items-center space-x-2 md:space-x-4 basis-full md:basis-auto md:mt-0 mt-4 order-3 md:order-2">
        <ToggleFollow
          user={user}
          isFollowing={user?.follow_by_viewer}
          doUnfollow={doUnfollow}
          isUnfollowLoading={isUnfollowLoading}
          handleFollow={handleFollow}
          isDoFollowLoading={isDoFollowLoading}
        />
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

export default UserProfileSettings
