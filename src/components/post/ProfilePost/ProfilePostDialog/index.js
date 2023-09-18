import { useState } from 'react'

import Dialog, { DialogContent, DialogTrigger } from '@/components/base/Dialog'

import PostDialogContent from './PostDialogContent'
import PostImageSlider from './PostImageSlider'

const ProfilePostDialog = ({ children, images, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)

  const trigger = (
    <DialogTrigger asChild>
      <div>{children}</div>
    </DialogTrigger>
  )

  return (
    <Dialog isOpen={isOpen} onClose={setIsOpen} trigger={trigger}>
      <DialogContent className="max-h-[calc(100vh-40px)] max-w-[calc(100vw-64px-64px)] rounded-lg bg-background sm:rounded-none md:h-full md:w-max">
        <div className="flex flex-col md:h-full md:flex-row">
          <div className="hidden h-full md:block">
            <PostImageSlider images={images} />
          </div>
          <div className="min-w-[300px] max-w-full shrink-0 md:h-full md:max-w-[500px]">
            <PostDialogContent {...props} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProfilePostDialog
