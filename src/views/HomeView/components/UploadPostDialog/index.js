import { Transition } from '@headlessui/react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'

import { Button } from '@/components/base'
import Dialog, { DialogContent } from '@/components/base/Dialog'
import { ArrowLeftIcon, UploadImageFileIcon, XIcon } from '@/components/icons'
import { useImageUpload } from '@/hooks/custom'
import usePostDialog from '@/hooks/custom/usePostDialog'
import { cn } from '@/utils'

const UploadPostDialog = () => {
  const { isOpen, onClose } = usePostDialog()
  const [isCaption, setIsCaption] = useState(false)
  const { selectedImage, previewImage, handleImageChange, handleRemoveImage } = useImageUpload()
  const session = useSession()

  const dialogTitle = previewImage ? 'Crop' : 'Create a post'

  const renderFormView = () => {
    return (
      <form className="flex flex-col items-center justify-center space-y-4 text-base">
        <UploadImageFileIcon width={96} height={77} />
        <h2 className="text-xl">Drag photos and videos here</h2>
        <label
          htmlFor="file"
          className="h-[32px] text-sm cursor-pointer focus:outline-none flex items-center justify-center gap-x-2 rounded-lg text-white font-bold bg-btn-primary hover:bg-btn-primary-hover disabled:cursor-default disabled:bg-very-light-azure w-fit px-3"
        >
          Select from computer
        </label>
        <input id="file" type="file" className="hidden" onChange={handleImageChange} />
      </form>
    )
  }

  const renderPreviewImageView = () => {
    return (
      <div className="relative w-full h-full flex items-center">
        <div className="absolute -top-8 right-0 px-3 flex justify-between items-center w-full">
          <Button
            variant="text-secondary"
            icon={ArrowLeftIcon}
            onClick={() => {
              if (previewImage) {
                setIsCaption(false)
                return
              }
              handleRemoveImage()
            }}
          />
          <Button variant="text-primary" size="small" onClick={() => setIsCaption(true)}>
            Next
          </Button>
        </div>

        <div className="h-full flex items-center gap-x-4 transition duration-500">
          <div className="w-[590px] h-[575px] relative z-50 shrink-0">
            <Image
              fill
              src={previewImage}
              alt="Preview image"
              className={cn(
                'object-cover transition-all duration-500',
                isCaption ? 'rounded-bl-xl' : 'rounded-b-xl'
              )}
            />
            <button
              className={cn(
                'absolute bottom-3 right-3 z-50',
                'flex items-center justify-center',
                'w-7 h-7 rounded-full',
                'bg-black text-white',
                'cursor-pointer hover:opacity-80'
              )}
              type="button"
              onClick={handleRemoveImage}
            >
              <XIcon size={18} />
            </button>
          </div>
          <div>
            <Transition
              show={isCaption}
              as={Fragment}
              enter="transition ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
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
            </Transition>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <DialogContent title={dialogTitle}>
        <div
          className={cn(
            'h-[300px] sm:h-[475px] md:h-[575px]',
            'flex items-center justify-center',
            'w-[590px] transition-all duration-500',
            isCaption && 'w-[930px]'
          )}
        >
          {previewImage ? renderPreviewImageView() : renderFormView()}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default UploadPostDialog
