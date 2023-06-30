import { useState } from 'react'

import Dialog, { DialogContent } from '@/components/base/Dialog'
import { useImageUpload, usePostDialog } from '@/hooks/custom'
import { cn } from '@/utils'

import EditPostForm from '../EditPostForm'
import LoadingView from '../LoadingView'
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
            'h-[40vh] md:h-[70vh]',
            'min-w-[348px] w-[50vw] max-w-[590px] md:w-[80vw] ',
            'flex items-center justify-center',
            'transition-all duration-500',
            step === 3 &&
              'min-w-[688px] w-[95vw] h-[40vh] md:w-[95vw] md:max-w-[1038px] md:h-[70vh]'
          )}
        >
          {step === 1 && (
            <UploadPostForm
              handleImageChange={(e) => {
                handleImageChange(e)
                setStep((prev) => prev + 1)
              }}
            />
          )}
          {(step === 2 || step === 3) && <EditPostForm step={step} setStep={setStep} />}
          {step === 4 && <LoadingView />}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default UploadPostDialog
