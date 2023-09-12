import { useMemo, useState } from 'react'

import Dialog, { DialogContent } from '@/components/base/Dialog'
import { useImageUpload, useUploadPostDialog } from '@/hooks/custom'
import { cn } from '@/utils'

import EditPostView from './EditPostView'
import LoadingView from './LoadingView'
import UploadImageView from './UploadImageView'

const UploadPostDialog = () => {
  const { isOpen, onClose } = useUploadPostDialog()
  const [step, setStep] = useState(1)
  const { handleImageChange } = useImageUpload()

  const dialogTitleByStep = useMemo(
    () => ({
      1: 'Create New Post',
      2: 'Crop',
      3: 'Create New Post',
      4: 'Loading...',
    }),
    []
  )

  const dialogTitle = useMemo(() => dialogTitleByStep[step], [step])

  const views = {
    1: (
      <UploadImageView
        handleImageChange={(e) => {
          handleImageChange(e)
          setStep((prev) => prev + 1)
        }}
      />
    ),
    2: <EditPostView step={step} setStep={setStep} />,
    3: <EditPostView step={step} setStep={setStep} />,
    4: <LoadingView />,
  }

  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => {
        onClose()
        setStep(1)
      }}
    >
      <DialogContent title={dialogTitle}>
        <div
          className={cn(
            'h-[40vh] md:h-[70vh]',
            'w-[50vw] min-w-[348px] max-w-[590px] md:w-[80vw]',
            'flex items-center justify-center',
            'transition-all duration-500',
            step === 3 &&
              'h-[40vh] w-[95vw] min-w-[688px] md:h-[70vh] md:w-[95vw] md:max-w-[1038px]'
          )}
        >
          {views[step]}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default UploadPostDialog
