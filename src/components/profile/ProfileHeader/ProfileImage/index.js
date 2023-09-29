import { Pressable } from '@react-aria/interactions'
import Image from 'next/image'
import { useState } from 'react'

import { Button, Heading } from '@/components/base'
import Dialog, { DialogClose, DialogContent } from '@/components/base/Dialog'
import { XIcon } from '@/components/icons'
import { cn } from '@/utils'

const UploadImageButton = ({ className }) => {
  return (
    <div className="w-full text-center">
      <label
        htmlFor="file"
        className={cn(
          'block py-3',
          'text-sm font-bold text-btn-link',
          'cursor-pointer hover:text-btn-link-hover focus:outline-none',
          className
        )}
      >
        Upload Photo
      </label>
      <input id="file" type="file" className="hidden" onChange={(e) => {}} />
    </div>
  )
}

const ProfileImage = ({ image }) => {
  const [open, setOpen] = useState(false)
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

      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <DialogClose className="absolute right-2 top-2">
            <Button variant="ghost" icon={XIcon} />
          </DialogClose>
          <div className="flex flex-col divide-y divide-divide">
            <Heading size="xl" bold={false} className="py-4 text-center">
              Change Profile Photo
            </Heading>
            <div className="flex flex-col items-center justify-center divide-y divide-divide">
              <UploadImageButton />

              <Button variant="danger" fullWidth className="py-3">
                Remove Current Photo
              </Button>

              <Button variant="ghost" fullWidth className="py-3">
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProfileImage
