import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import { Image } from '@/components/base'
import Dialog, { DialogContent, DialogTrigger } from '@/components/base/Dialog'
import { CopyIcon } from '@/components/icons'
import { cn } from '@/utils'

import PostDialogContent from './PostDialogContent'
import PostImageSlider from './PostImageSlider'

const PostCard = (props) => {
  const { images, isMultipleImages } = props
  const [isOpen, setIsOpen] = useState(false)

  const trigger = (
    <DialogTrigger asChild>
      <div className="relative cursor-pointer">
        <Image width={310} height={310} src={images[0]} alt="post image" />
        <CopyIcon
          size={24}
          className={cn('text-white absolute right-2 top-2', isMultipleImages ? 'block' : 'hidden')}
        />
      </div>
    </DialogTrigger>
  )

  return (
    <Dialog isOpen={isOpen} onClose={setIsOpen} trigger={trigger}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-100"
        enterFrom="opacity-0 scale-110"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-110"
      >
        <DialogContent className="max-w-[calc(100vw-64px-64px)] md:w-max max-h-[calc(100vh-40px)] rounded-lg sm:rounded-none md:h-full">
          <div className="flex flex-col md:flex-row md:h-full">
            <div className="h-full hidden md:block">
              <PostImageSlider images={images} />
            </div>
            <div className="shrink-0 min-w-[300px] max-w-full md:max-w-[500px] md:h-full">
              <PostDialogContent {...props} />
            </div>
          </div>
        </DialogContent>
      </Transition.Child>
    </Dialog>
  )
}

export default PostCard
