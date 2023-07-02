import { Transition } from '@headlessui/react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'

import { useUploadPost } from '@/api'
import { Button, Popover } from '@/components/base'
import { Input, TextArea } from '@/components/form'
import { ArrowLeftIcon, MapPinIcon, SmileIcon, XIcon } from '@/components/icons'
import { EmojiPicker, MiniEmojiPicker } from '@/components/shared'
import { CLOUDINARY_UPLOAD_PRESET, POST_MAX_CHARACTERS } from '@/constants'
import Assets from '@/constants/Assets'
import { useImageUpload, usePostDialog, useToast } from '@/hooks/custom'
import { cn } from '@/utils'

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

const PreviewImageBox = ({ previewImage, step, handleRemoveImage }) => {
  return (
    <div
      className={cn(
        'relative z-50 shrink-0',
        'w-[50vw] min-w-[348px] max-w-[590px] md:w-[80vw]',
        'transition-all duration-500',
        step === 3 && 'md:w-[50vw] md:max-w-[648px]'
      )}
    >
      <Image
        fill
        src={previewImage || Assets.COMMON.PLACEHOLDER}
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

const PostSetting = () => {
  return (
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
  )
}

const EditPostForm = ({ step, setStep }) => {
  const [characterCount, setCharacterCount] = useState(0)
  const { previewImage, handleRemoveImage } = useImageUpload()
  const { onClose } = usePostDialog()
  const { success, error } = useToast()

  const { uploadImage, uploadPost } = useUploadPost()

  const handleResetPost = () => {
    handleRemoveImage()
    setStep(1)
  }

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      caption: '',
      images: [],
      videos: [],
    },
  })

  const captionValue = watch('caption')

  const onSubmit = async (data) => {
    setStep(4)
    const formData = new FormData()
    formData.append('file', previewImage)
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

    try {
      const response = await uploadImage(formData)
      await uploadPost({ ...data, images: [response.data.url] })
      success('Upload!')
    } catch (err) {
      error(err.message)
    } finally {
      setStep(1)
      onClose()
    }
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
            <form className="flex flex-col gap-y-2 md:gap-y-4" onSubmit={handleSubmit(onSubmit)}>
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

              <PostSetting />
            </form>
          </div>
        </Transition>
      </div>
    </div>
  )
}

export default EditPostForm
