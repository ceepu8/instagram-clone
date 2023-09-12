import { useState } from 'react'

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
      <DialogContent title={<h1 className="capitalize">{variant}</h1>}>
        <DialogClose className="absolute right-2 top-2">
          <Button variant="ghost" icon={XIcon} />
        </DialogClose>
        {content[variant]}
      </DialogContent>
    </Dialog>
  )
}
