import { Transition } from '@headlessui/react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'

import { Button, LineBreak, Popover } from '@/components/base'
import { Input, TextArea } from '@/components/form'
import { MapPinIcon, SmileIcon } from '@/components/icons'
import { MiniEmojiPicker } from '@/components/shared'
import { POST_MAX_CHARACTERS } from '@/constants'
import Assets from '@/constants/Assets'

const UserInfo = () => {
  const session = useSession()

  return (
    <div className="flex items-center gap-x-2">
      <Image
        width={25}
        height={25}
        src={session?.data?.user?.image || Assets.COMMON.PLACEHOLDER}
        alt="Profile Image"
        className="rounded-full"
      />
      <p className="text-sm font-semibold">{session?.data?.user?.name}</p>
    </div>
  )
}

const EditPostForm = ({ step, onSubmit, register, watch, setValue }) => {
  const [characterCount, setCharacterCount] = useState(0)

  const captionValue = watch('caption')

  return (
    <Transition
      show={step === 3}
      as={Fragment}
      enter="transition ease-in-out duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in-out duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="flex flex-1 flex-col gap-y-2 p-4 h-full overflow-auto">
        <UserInfo />
        <form className="flex flex-col" onSubmit={onSubmit}>
          <div>
            <TextArea
              placeholder="Write a caption..."
              maxLength={POST_MAX_CHARACTERS}
              className="h-[100px] md:h-[200px] bg-popover"
              onChange={(e) => {
                setCharacterCount(e.target.value.length)
              }}
              {...register('caption')}
            />
            <div className="flex items-center justify-between">
              <Popover
                contentClassName="p-4 rounded-md"
                trigger={<Button variant="text-secondary" size="small" icon={SmileIcon} />}
                hasArrow
              >
                <MiniEmojiPicker
                  onEmojiClick={(emoji) => {
                    const newCaptionValue = captionValue + emoji
                    setValue('caption', newCaptionValue)
                  }}
                />
              </Popover>
              <p className="text-xs text-footer font-semibold">
                {characterCount} / {POST_MAX_CHARACTERS}
              </p>
            </div>
          </div>
          <LineBreak className="-mx-4" />

          <div>
            <Input placeholder="Add location" icon={MapPinIcon} />
          </div>
          <LineBreak className="-mx-4" />

          <div>
            <p>Accessibility</p>
          </div>
          <LineBreak className="-mx-4" />

          <div>
            <p>Advanced Settings</p>
          </div>
          <LineBreak className="-mx-4" />
        </form>
      </div>
    </Transition>
  )
}

export default EditPostForm
