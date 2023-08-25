import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import { Button } from '@/components/base'
import Dialog, { DialogContent, DialogTrigger } from '@/components/base/Dialog'
import { MoreHorizontalIcon } from '@/components/icons'

const PostMenuDialog = () => {
  const [open, setOpen] = useState(false)

  const ITEM_LIST = [
    {
      key: 'report',
      label: 'Report',
      onClick: null,
    },
    {
      key: 'add-to-favorites',
      label: 'Add to favorites',
      onClick: null,
    },
    {
      key: 'go-to-post',
      label: 'Go to post',
      onClick: null,
    },
    {
      key: 'share-to',
      label: 'Share to ...',
      onClick: null,
    },
    {
      key: 'copy-link',
      label: 'Copy link',
      onClick: null,
    },
    {
      key: 'embed',
      label: 'Embed',
      onClick: null,
    },
    {
      key: 'cancel',
      label: 'Cancel',
      onClick: () => setOpen(false),
    },
  ]

  const trigger = (
    <DialogTrigger className="ml-auto">
      <Button type="trigger" variant="ghost" icon={MoreHorizontalIcon} />
    </DialogTrigger>
  )

  const renderItem = (item, index) => {
    const isFirst = index === 0
    const variant = isFirst ? 'danger' : 'ghost'
    const bold = !!isFirst
    const { label, key, onClick } = item
    return (
      <div className="w-full py-3 text-center">
        <Button bold={bold} onClick={onClick} key={key} variant={variant}>
          {label}
        </Button>
      </div>
    )
  }

  const content = (
    <div className="flex flex-col items-center divide-y divide-divide">
      {ITEM_LIST.map(renderItem)}
    </div>
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
        <DialogContent className="min-w-[420px]">{content}</DialogContent>
      </Transition.Child>
    </Dialog>
  )
}

export default PostMenuDialog
