import { Pressable } from '@react-aria/interactions'
import Image from 'next/image'
import { useRef, useState } from 'react'

import { Button, Heading } from '@/components/base'
import Dialog, { DialogClose, DialogContent } from '@/components/base/Dialog'
import { XIcon } from '@/components/icons'
import { useToast } from '@/hooks/custom'
import { cn } from '@/utils'
import { validateImage } from '@/utils/images'

const UploadImage = ({ children }) => {
  const fileInputRef = useRef(null)
  const { error } = useToast()

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0]
    const isValid = validateImage(selectedFile)

    if (!isValid) {
      error('Image Size exceeds 10MB or invalid Image File!')
    }

    // TODO: upload image to backend
  }
  return (
    <div className="w-full text-center">
      <div role="presentation" onClick={() => fileInputRef.current.click()}>
        {children}
      </div>
      <input
        id="file"
        ref={fileInputRef}
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  )
}

const ProfileImageDialogContent = ({ onClose }) => {
  return (
    <div className="flex flex-col divide-y divide-divide">
      <Heading size="xl" bold={false} className="py-4 text-center">
        Change Profile Photo
      </Heading>
      <div className="flex flex-col items-center justify-center divide-y divide-divide">
        <UploadImage>
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
        <Button variant="danger" fullWidth className="py-3">
          Remove Current Photo
        </Button>
        <Button variant="ghost" fullWidth className="py-3" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </div>
  )
}

const ProfileImage = ({ image }) => {
  const [open, setOpen] = useState(false)

  const onClose = () => setOpen(false)

  return (
    <div>
      <Pressable onPress={() => setOpen(true)}>
        <div className="relative mx-auto h-[70px] w-[70px] cursor-pointer sm:h-[150px] sm:w-[150px]">
          <Image
            className="rounded-full border border-chinese-silver"
            fill
            src={image}
            alt="Profile Image"
          />
        </div>
      </Pressable>

      <Dialog isOpen={open} onClose={onClose}>
        <DialogContent>
          <DialogClose className="absolute right-2 top-2">
            <Button variant="ghost" icon={XIcon} />
          </DialogClose>
          <ProfileImageDialogContent onClose={onClose} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProfileImage
