import { Transition } from '@headlessui/react'
import { Fragment, useMemo, useState } from 'react'

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

  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => {
        onClose()
        setStep(1)
      }}
    >
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-100"
        enterFrom="opacity-0 scale-110"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-110"
      >
        <DialogContent title={dialogTitle}>
          <div
            className={cn(
              'h-[40vh] md:h-[70vh]',
              'min-w-[348px] w-[50vw] max-w-[590px] md:w-[80vw]',
              'flex items-center justify-center',
              'transition-all duration-500',
              step === 3 &&
                'min-w-[688px] w-[95vw] h-[40vh] md:w-[95vw] md:max-w-[1038px] md:h-[70vh]'
            )}
          >
            {step === 1 && (
              <UploadImageView
                handleImageChange={(e) => {
                  handleImageChange(e)
                  setStep((prev) => prev + 1)
                }}
              />
            )}
            {(step === 2 || step === 3) && <EditPostView step={step} setStep={setStep} />}
            {step === 4 && <LoadingView />}
          </div>
        </DialogContent>
      </Transition.Child>
    </Dialog>
  )
}

export default UploadPostDialog
