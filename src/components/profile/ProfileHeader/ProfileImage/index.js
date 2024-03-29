import { Pressable } from '@react-aria/interactions'
import Image from 'next/image'

import { Button, Heading } from '@/components/base'
import Dialog, { DialogClose, DialogContent } from '@/components/base/Dialog'
import { XIcon, AnimatedBarSpinnerIcon } from '@/components/icons'
import { cn } from '@/utils'
import { useProfileImageDialog } from '@/utils/images'

import UploadImage from './UploadImage'

const ImageLoading = () => (
  <div className="absolute flex h-full w-full items-center justify-center bg-[rgba(255,255,255,0.5)]">
    <AnimatedBarSpinnerIcon />
  </div>
)

const ProfileImageDialogContent = ({ onCloseDialog, handleImageChange, handleRemoveImage }) => {
  return (
    <div className="flex flex-col divide-y divide-divide">
      <Heading size="xl" bold={false} className="py-4 text-center">
        Change Profile Photo
      </Heading>
      <main className="flex flex-col items-center justify-center divide-y divide-divide">
        <UploadImage handleImageChange={handleImageChange}>
          <span
            className={cn(
              'block py-3',
              'text-sm font-bold text-btn-link',
              'cursor-pointer hover:text-btn-link-hover focus:outline-none'
            )}
          >
            Upload Photo
          </span>
        </UploadImage>
        <Button variant="danger" fullWidth className="py-3" onClick={handleRemoveImage}>
          Remove Current Photo
        </Button>
        <Button variant="ghost" fullWidth className="py-3" onClick={onCloseDialog}>
          Cancel
        </Button>
      </main>
    </div>
  )
}

const ProfileImage = ({ image }) => {
  const { open, setOpen, onCloseDialog, loading, handleImageChange, handleRemoveImage } =
    useProfileImageDialog()

  return (
    <div>
      <Pressable onPress={() => setOpen(true)}>
        <div className="relative mx-auto flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-full bg-lotion sm:h-[150px] sm:w-[150px]">
          {image && (
            <Image
              className="rounded-full border border-chinese-silver object-cover"
              alt="Profile Image"
              src={image}
              fill
            />
          )}
          {loading && <ImageLoading />}
        </div>
      </Pressable>

      <Dialog isOpen={open} onClose={onCloseDialog}>
        <DialogContent>
          <DialogClose className="absolute right-2 top-2">
            <Button variant="ghost" icon={XIcon} />
          </DialogClose>
          <ProfileImageDialogContent
            onClose={onCloseDialog}
            handleImageChange={handleImageChange}
            handleRemoveImage={handleRemoveImage}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProfileImage
