import { useState } from 'react'

import Dialog, { DialogContent } from '@/components/base/Dialog'
import { useImageUpload } from '@/hooks/custom'
import usePostDialog from '@/hooks/custom/usePostDialog'
import { cn } from '@/utils'

import EditPostForm from '../EditPostForm'
import UploadPostForm from '../UploadPostForm'

const UploadPostDialog = () => {
  const { isOpen, onClose } = usePostDialog()
  const [step, setStep] = useState(1)
  const { handleImageChange } = useImageUpload()

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <DialogContent title="Create new post">
        <div
          className={cn(
            'h-[575px]',
            'flex items-center justify-center',
            'w-[590px] transition-all duration-500',
            step === 3 && 'w-[930px]'
          )}
        >
          {step !== 1 ? (
            <EditPostForm step={step} setStep={setStep} />
          ) : (
            <UploadPostForm
              handleImageChange={(e) => {
                handleImageChange(e)
                setStep((prev) => prev + 1)
              }}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default UploadPostDialog
