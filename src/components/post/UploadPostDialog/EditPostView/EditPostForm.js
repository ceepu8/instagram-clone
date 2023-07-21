import { Transition } from '@headlessui/react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { FormProvider, useFormContext } from 'react-hook-form'

import { Button, LineBreak, Popover } from '@/components/base'
import { Input, TextArea } from '@/components/form'
import { MapPinIcon, SmileIcon } from '@/components/icons'
import { MiniEmojiPicker } from '@/components/shared'
import { MAX_POST_CAPTION_LENGTH } from '@/constants'
import Assets from '@/constants/Assets'
import { FORM_POST } from '@/validates/post.schema'

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
      <p className="text-sm font-semibold">{session?.data?.user?.username}</p>
    </div>
  )
}

const MiniEmojiPickerPopover = ({ onEmojiClick }) => {
  return (
    <Popover
      contentClassName="px-4 pt-4 rounded-md"
      trigger={<Button variant="text-secondary" size="small" icon={SmileIcon} />}
      hasArrow
    >
      <MiniEmojiPicker onEmojiClick={onEmojiClick} />
    </Popover>
  )
}

const CaptionTextarea = () => {
  const [characterCount, setCharacterCount] = useState(0)
  const { register, watch, setValue } = useFormContext()

  const value = watch(FORM_POST.CAPTION)

  return (
    <div>
      <TextArea
        placeholder="Write a caption..."
        maxLength={MAX_POST_CAPTION_LENGTH}
        className="h-[100px] md:h-[200px] bg-popover"
        onChange={(e) => {
          setCharacterCount(e.target.value.length)
        }}
        {...register(FORM_POST.CAPTION)}
      />
      <div className="flex items-center justify-between">
        <MiniEmojiPickerPopover
          onEmojiClick={(emoji) => {
            setValue(FORM_POST.CAPTION, value + emoji)
          }}
        />
        <p className="text-xs text-footer font-semibold">
          {characterCount} / {MAX_POST_CAPTION_LENGTH}
        </p>
      </div>
    </div>
  )
}

const LocationInput = () => {
  return (
    <div className="flex items-center justify-between">
      <Input placeholder="Add location" />
      <MapPinIcon size={20} />
    </div>
  )
}

const EditPostForm = ({ step, onSubmit, methods }) => {
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
        <FormProvider {...methods}>
          <form className="flex flex-col" onSubmit={onSubmit}>
            <CaptionTextarea />
            <LineBreak className="-mx-4" />

            <LocationInput />
            <LineBreak className="-mx-4" />

            <p>Accessibility</p>
            <LineBreak className="-mx-4" />

            <p>Advanced Settings</p>
            <LineBreak className="-mx-4" />
          </form>
        </FormProvider>
      </div>
    </Transition>
  )
}

export default EditPostForm
