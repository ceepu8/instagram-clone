import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import { useGetFollowers, useGetFollowings } from '@/api/follow'
import { Button } from '@/components/base'
import Dialog, { DialogClose, DialogContent, DialogTrigger } from '@/components/base/Dialog'
import { XIcon } from '@/components/icons'

import FollowCardList from '../FollowCardList'

const FollowingsDialogContent = ({ userId }) => {
  const { data, isLoading } = useGetFollowings(userId)
  return <FollowCardList isLoading={isLoading} data={data?.data} />
}

const FollowersDialogContent = ({ userId }) => {
  const { data, isLoading } = useGetFollowers(userId)
  return <FollowCardList isLoading={isLoading} data={data?.data} />
}

export const FollowDialog = ({ variant = 'followings', userId, trigger }) => {
  const [open, setOpen] = useState(false)

  const content = {
    followers: <FollowersDialogContent userId={userId} />,
    followings: <FollowingsDialogContent userId={userId} />,
  }

  return (
    <Dialog isOpen={open} onClose={setOpen} trigger={<DialogTrigger>{trigger}</DialogTrigger>}>
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
