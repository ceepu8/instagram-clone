import { Transition } from '@headlessui/react'
import dayjs from 'dayjs'
import NextImage from 'next/image'
import { Fragment, useState } from 'react'

import { Button, Image } from '@/components/base'
import Dialog, { DialogContent, DialogTrigger } from '@/components/base/Dialog'
import { CheckIcon, CopyIcon, Menu, MoreHorizontalIcon } from '@/components/icons'
import Assets from '@/constants/Assets'
import { useAuth } from '@/hooks/query/auth'
import { cn, getDifferent, getTimeFromNow } from '@/utils'

const PostImageSlider = ({ images = [] }) => {
  return (
    <div className="w-full max-w-[768px] flex-grow shrink-[2] relative">
      <NextImage
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
        src={images[0]}
        alt="image"
      />
    </div>
  )
}

const PostHeader = ({ owner }) => {
  return (
    <div className="flex items-center space-x-4 p-4 border-b border-divide">
      <NextImage
        width={30}
        height={30}
        src={owner?.image || Assets.COMMON.PLACEHOLDER}
        className="rounded-full border border-divide"
        alt="Profile image"
      />
      <p className="flex-1 font-semibold text-sm">{owner?.name}</p>
      <Button variant="text-secondary" icon={MoreHorizontalIcon} />
    </div>
  )
}

const PostCaption = ({ owner, caption = '', createdAt }) => {
  return (
    <div className="flex items-center s p-4">
      <NextImage
        width={30}
        height={30}
        src={owner?.image || Assets.COMMON.PLACEHOLDER}
        className="rounded-full border border-divide mr-4"
        alt="Profile image"
      />
      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-sm flex items-center space-x-1">
          <p>{owner?.name}</p>
          <div className="w-3 h-3 bg-primary flex items-center justify-center rounded-full">
            <CheckIcon size={8} className="text-base-reverse" />
          </div>
          <span className="text-sm">{caption}</span>
        </div>
        <p className="text-comment text-xs font-bold">{getTimeFromNow(createdAt)}</p>
      </div>
    </div>
  )
}

const PostCard = (props) => {
  const { images, isMultipleImages, createdAt, caption, owner } = props
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
        <DialogContent className="w-[calc(100%-64px-64px)] max-w-[1110px] max-h-[calc(100vh-40px)]">
          <div className="flex-col sm:flex sm:flex-row h-full justify-between">
            <div className="w-full max-w-[768px] flex-grow shrink-[2] relative">
              <PostImageSlider images={images} />
            </div>
            <div className="max-w-[500px] min-w-[405px] flex-grow-[2]">
              <PostHeader owner={owner} />
              <PostCaption owner={owner} caption={caption} createdAt={createdAt} />
            </div>
          </div>
        </DialogContent>
      </Transition.Child>
    </Dialog>
  )
}

export const getServerSideProps = async (data) => {
  console.log(data)
  //   const res = await fetch('https://api.github.com/repos/vercel/next.js')
  //   const repo = await res.json()
  return { props: {} }
}

export default PostCard
