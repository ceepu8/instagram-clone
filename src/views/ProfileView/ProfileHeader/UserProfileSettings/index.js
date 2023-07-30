import { Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useEffect, useMemo, useState } from 'react'

import { useFollow, useIsFollow, useUnfollow } from '@/api/follow'
import { Button, LineBreak } from '@/components/base'
import Dialog, { DialogClose, DialogContent, DialogTrigger } from '@/components/base/Dialog'
import { ChevronDown, MoreHorizontalIcon, UserPlusIcon, XIcon } from '@/components/icons'
import Assets from '@/constants/Assets'

const FollowingButton = ({ loading = false }) => {
  return (
    <DialogTrigger>
      <div className="w-[122px] h-[32px]">
        <Button variant="secondary" size="small" fullWidth loading={loading}>
          Following <ChevronDown className="w-4 h-4 shrink-0" />
        </Button>
      </div>
    </DialogTrigger>
  )
}

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

const FollowingDialog = ({ user, loading, doUnfollow }) => {
  const [open, setOpen] = useState(false)

  const handleUnfollow = () => {
    if (!user?.id) return
    setOpen(false)
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

const UserProfileSettings = ({ user }) => {
  const { doFollow, isSuccess: isFollowSuccess, isLoading: isDoFollowLoading } = useFollow(user)

  const {
    doUnfollow,
    isSuccess: isUnfollowSuccess,
    isLoading: isUnfollowLoading,
  } = useUnfollow(user)

  const { data, refetch } = useIsFollow(user?.id)

  const handleFollow = () => {
    if (!user?.id || data?.isFollowing) return
    doFollow()
  }

  const followButton = useMemo(() => {
    if (!data?.isFollowing) {
      return <FollowButton loading={isDoFollowLoading} onClick={handleFollow} />
    }

    return <FollowingDialog user={user} loading={isUnfollowLoading} doUnfollow={doUnfollow} />
  }, [data?.isFollowing, isDoFollowLoading, isUnfollowLoading])

  useEffect(() => {
    refetch()
  }, [isFollowSuccess, isUnfollowSuccess])

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

export default UserProfileSettings
