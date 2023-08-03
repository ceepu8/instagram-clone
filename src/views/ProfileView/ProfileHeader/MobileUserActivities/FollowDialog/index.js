import { Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'

import { useFollow, useGetFollowers, useGetFollowings, useGetFollows } from '@/api/follow'
import { Button } from '@/components/base'
import Dialog, { DialogClose, DialogContent, DialogTrigger } from '@/components/base/Dialog'
import { XIcon } from '@/components/icons'
import Assets from '@/constants/Assets'

const FollowCardItem = ({ user, isFollowing }) => {
  const { doFollow, isLoading: isDoFollowLoading, isSuccess } = useFollow(user)

  const { image, username } = user || {}

  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden border-[0.5px]">
        <Image fill src={image || Assets.COMMON.PLACEHOLDER} alt="profile image" />
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="font-bold text-sm">{username || 'username'}</h2>
        <p className="text-sm text-comment">{username || 'description'}</p>
      </div>
      {isFollowing || isSuccess ? (
        <Button variant="secondary" size="small">
          Following
        </Button>
      ) : (
        <Button variant="primary" size="small" onClick={doFollow} loading={isDoFollowLoading}>
          Follow
        </Button>
      )}
    </div>
  )
}
const FollowCardItemSkeleton = () => {
  return (
    <div className="flex items-center space-x-2 animate-pulse">
      <div className="w-10 h-10 shrink-0 rounded-full bg-bright-gray" />
      <div className="flex flex-col flex-1 space-y-2">
        <div className="h-3 w-[77px] bg-bright-gray rounded-lg" />
        <div className="h-3 w-[120px] bg-bright-gray rounded-lg" />
      </div>
      <div className="h-8 w-[77px] bg-bright-gray rounded-lg" />
    </div>
  )
}

const FollowCardList = ({ isLoading, data }) => {
  const ids = data?.map((e) => e.id)

  const { data: followsData, isLoading: isGetFollowsLoading } = useGetFollows(ids)

  const cardSkeletonList = Array(6)
    .fill('')
    .map((index) => <FollowCardItemSkeleton key={index} />)

  return (
    <div className="px-4 py-2 min-h-[340px]">
      <div className="flex flex-col space-y-4">
        {(isLoading || isGetFollowsLoading) && cardSkeletonList}
        {!isLoading &&
          !isGetFollowsLoading &&
          data?.length > 0 &&
          data?.map((user) => {
            const isFollowing = followsData?.[user?.id]?.isFollowing
            return <FollowCardItem key={user?.id} user={user} isFollowing={isFollowing} />
          })}
        {!isLoading && !data?.length && (
          <p className="text-center text-sm text-comment">No followers found</p>
        )}
      </div>
    </div>
  )
}

const FollowingsDialogContent = ({ userId }) => {
  const { data, isLoading } = useGetFollowings(userId)

  return <FollowCardList isLoading={isLoading} data={data?.data} />
}

const FollowersDialogContent = ({ userId }) => {
  const { data, isLoading } = useGetFollowers(userId)

  return <FollowCardList isLoading={isLoading} data={data?.data} />
}

export const FollowDialog = ({ variant = 'followings', userId, children }) => {
  const [open, setOpen] = useState(false)
  const trigger = <DialogTrigger>{children}</DialogTrigger>

  const content = {
    followers: <FollowersDialogContent userId={userId} />,
    followings: <FollowingsDialogContent userId={userId} />,
  }

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
        <DialogContent className="min-w-[420px]" title={<h1 className="capitalize">{variant}</h1>}>
          <DialogClose className="absolute right-2 top-2">
            <Button variant="text-secondary" icon={XIcon} />
          </DialogClose>
          {content[variant]}
        </DialogContent>
      </Transition.Child>
    </Dialog>
  )
}
