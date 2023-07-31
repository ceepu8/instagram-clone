import { Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'

import { Button } from '@/components/base'
import Dialog, { DialogClose, DialogContent, DialogTrigger } from '@/components/base/Dialog'
import { XIcon } from '@/components/icons'
import Assets from '@/constants/Assets'

const FollowCardItem = ({ user }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden border-[0.5px]">
        <Image fill src={user?.imageUrl || Assets.COMMON.PLACEHOLDER} alt="profile image" />
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="font-bold text-sm">{user?.username || 'username'}</h2>
        <p className="text-sm text-comment">{user?.description || 'description'}</p>
      </div>
      <Button variant="primary" size="small">
        Follow
      </Button>
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

export const FollowDialog = ({ variant = 'followings', children }) => {
  const [open, setOpen] = useState(false)
  const trigger = <DialogTrigger>{children}</DialogTrigger>

  const cardSkeletonList = Array(6)
    .fill('')
    .map((index) => <FollowCardItemSkeleton key={index} />)

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
          <div className="px-4 py-2 min-h-[340px]">
            <div className="flex flex-col space-y-4">{cardSkeletonList}</div>
          </div>
        </DialogContent>
      </Transition.Child>
    </Dialog>
  )
}
