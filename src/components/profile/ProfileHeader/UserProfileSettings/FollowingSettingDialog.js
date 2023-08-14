import { Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'

import { Button, LineBreak } from '@/components/base'
import Dialog, { DialogClose, DialogContent, DialogTrigger } from '@/components/base/Dialog'
import { XIcon } from '@/components/icons'
import Assets from '@/constants/Assets'

const FollowingSettingDialog = ({ user, doUnfollow, trigger }) => {
  const [open, setOpen] = useState(false)

  const handleUnfollow = () => {
    if (!user?.id) return
    setOpen(false)
    doUnfollow({ id: user.id })
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
        <DialogContent className="min-w-[420px]">
          <DialogClose className="absolute right-2 top-2">
            <Button variant="ghost" icon={XIcon} />
          </DialogClose>
          <div className="py-4">
            <div className="text-center">
              <Image
                className="mx-auto rounded-full border border-chinese-silver"
                width={60}
                height={60}
                src={user?.image || Assets.COMMON.PLACEHOLDER}
                alt="Profile Image"
              />
              <p className="text-sm font-bold">{user?.username || 'username'}</p>
            </div>
            <LineBreak />
            <Button
              variant="ghost"
              size="small"
              fullWidth
              className="justify-start px-4 py-2"
              bold={false}
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

export default FollowingSettingDialog
