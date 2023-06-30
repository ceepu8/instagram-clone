import { Transition } from '@headlessui/react'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Popover } from '@/components/base'
import { Input, TextArea } from '@/components/form'
import { ArrowLeftIcon, MapPinIcon, SmileIcon, XIcon } from '@/components/icons'
import { EmojiPicker } from '@/components/shared'
import { useImageUpload, usePostDialog, useToast } from '@/hooks/custom'
import { cn } from '@/utils'

const UserInfo = () => {
  const session = useSession()

  return (
    <div className="flex items-center gap-x-2">
      <Image
        width={25}
        height={25}
        src={session?.data?.user?.image}
        alt="Profile Image"
        className="rounded-full"
      />
      <p className="text-sm font-semibold">{session?.data?.user?.name}</p>
    </div>
  )
}

const PreviewImageBox = ({ previewImage, step, handleRemoveImage }) => {
  return (
    <div
      className={cn(
        'relative z-50 shrink-0',
        'w-[50vw] min-w-[348px] max-w-[590px] md:w-[80vw]',
        step === 3 && 'md:w-[50vw] md:max-w-[648px]'
      )}
    >
      <Image
        fill
        src={previewImage || '/guinea-pig-2.jpeg'}
        alt="Preview image"
        className={cn(
          'object-cover transition-all duration-500',
          step === 3 ? 'rounded-bl-xl' : 'rounded-b-xl'
        )}
      />
      <button
        className="absolute bottom-3 right-3 z-50
          flex items-center justify-center
          w-7 h-7 rounded-full
          bg-black text-white
          cursor-pointer hover:opacity-80"
        type="button"
        onClick={handleRemoveImage}
      >
        <XIcon size={18} />
      </button>
    </div>
  )
}

const StepSetting = ({ step, setStep, handleResetPost, onSubmit }) => {
  return (
    <div className="absolute -top-8 right-0 px-3 flex justify-between items-center w-full">
      <Button
        variant="text-secondary"
        icon={ArrowLeftIcon}
        onClick={() => {
          setStep((prev) => prev - 1)
          if (step === 2) {
            handleResetPost()
          }
        }}
      />
      <Button
        variant="text-primary"
        size="small"
        onClick={() => {
          if (step === 3) {
            onSubmit()
            return
          }
          setStep((prev) => prev + 1)
        }}
      >
        {step === 3 ? 'Share' : 'Next'}
      </Button>
    </div>
  )
}

const EditPostForm = ({ step, setStep }) => {
  const [characterCount, setCharacterCount] = useState(0)
  const { previewImage, handleRemoveImage } = useImageUpload()
  const session = useSession()
  const { onClose } = usePostDialog()
  const { success, error } = useToast()

  const handleResetPost = () => {
    handleRemoveImage()
    setStep(1)
  }

  const { register, handleSubmit } = useForm({
    defaultValues: {
      caption: '',
      images: [],
      videos: [],
    },
  })

  const onSubmit = async (data) => {
    const formData = new FormData()
    formData.append('file', previewImage)
    formData.append('upload_preset', 'zw2rml5a')

    setStep(4)
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dr4xirffu/image/upload`,
      formData
    )

    if (response?.data?.url) {
      try {
        await axios.post('/api/post', {
          ...data,
          userEmail: session.data.user?.email,
          images: [response.data.url],
        })
        success('Upload!')
      } catch (err) {
        console.log(err)
        error('Something went wrong!')
      }
    }

    setStep(1)
    onClose()
  }

  return (
    <div className="relative w-full h-full flex items-center">
      <div className="h-full w-full flex transition duration-500">
        <StepSetting
          step={step}
          handleResetPost={handleResetPost}
          setStep={setStep}
          onSubmit={handleSubmit(onSubmit)}
        />
        <PreviewImageBox
          previewImage={previewImage}
          step={step}
          handleRemoveImage={handleResetPost}
        />
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
            <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <TextArea
                  placeholder="Write a caption..."
                  maxLength="2200"
                  className="h-[200px] bg-popover"
                  onChange={(e) => {
                    setCharacterCount(e.target.value.length)
                  }}
                  {...register('caption')}
                />
                <div className="flex items-center justify-between">
                  <Popover
                    contentClassName="p-0"
                    trigger={<Button variant="text-secondary" size="small" icon={SmileIcon} />}
                  >
                    <EmojiPicker onEmojiClick={() => {}} />
                  </Popover>
                  <p className="text-xs text-footer font-semibold">{characterCount} / 2200</p>
                </div>
              </div>

              <div className="divide-y divide-divide">
                <div className="py-2">
                  <Input placeholder="Add location" icon={MapPinIcon} />
                </div>
                <div className="py-2">
                  <p>Accessibility</p>
                </div>
                <div className="py-2">
                  <p>Advanced Settings</p>
                </div>
              </div>
            </form>
          </div>
        </Transition>
      </div>
    </div>
  )
}

export default EditPostForm
