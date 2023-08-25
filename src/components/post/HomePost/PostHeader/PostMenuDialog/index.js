import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import { Button } from '@/components/base'
import Dialog, { DialogContent, DialogTrigger } from '@/components/base/Dialog'
import { MoreHorizontalIcon } from '@/components/icons'
import { useToast } from '@/hooks/custom'
import { useCopyToClipboard } from '@/hooks/shared'

const PostMenuDialog = () => {
  const [open, setOpen] = useState(false)
  const toast = useToast()

  const { copyToClipboard, isLoading } = useCopyToClipboard({
    onSuccess: () => toast.success('Copied!'),
  })

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
      onClick: () => copyToClipboard('copied!'),
      loading: isLoading,
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

  const renderItem = (item, index) => {
    const isFirst = index === 0
    const variant = isFirst ? 'danger' : 'ghost'
    const bold = !!isFirst
    return (
      <div key={item.key} className="flex w-full items-center justify-center py-3">
        <Button {...{ ...item, bold, variant }}>{item.label}</Button>
      </div>
    )
  }

  const content = (
    <div className="flex flex-col items-center divide-y divide-divide">
      {ITEM_LIST.map(renderItem)}
    </div>
  )

  const trigger = (
    <DialogTrigger className="ml-auto">
      <MoreHorizontalIcon />
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
        <DialogContent className="min-w-[420px]">{content}</DialogContent>
      </Transition.Child>
    </Dialog>
  )
}

export default PostMenuDialog
