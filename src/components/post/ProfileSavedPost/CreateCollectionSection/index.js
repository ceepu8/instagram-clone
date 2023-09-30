import { ChevronLeft, Plus, XIcon } from 'lucide-react'
import { FormProvider } from 'react-hook-form'

import { Button } from '@/components/base'
import Dialog, { DialogClose, DialogContent } from '@/components/base/Dialog'
import { useCreateCollection } from '@/utils/collection'

import CollectionNameForm from './CollectionNameForm.'
import SavedPostSelectForm from './SavedPostSelectForm'

const CreateCollectionSection = ({ setCollection }) => {
  const {
    step,
    methods,
    open,
    handleSubmitFirstStep,
    handleFinalSubmit,
    handleOpenDialog,
    handleCloseDialog,
    handleStepBack,
  } = useCreateCollection()

  // used for static data only, update later
  const handleSubmit = () => {
    const values = methods.getValues()
    setCollection((prev) => [...prev, { ...values }])
    handleFinalSubmit()
  }

  const VIEW_BY_STEP = {
    1: {
      title: 'New Collection',
      renderComponent: () => <CollectionNameForm onSubmit={handleSubmitFirstStep} />,
    },
    2: {
      title: 'Add from saved',
      renderComponent: () => <SavedPostSelectForm onSubmit={handleSubmit} />,
    },
  }

  return (
    <div className="flex w-full items-center justify-between">
      <p className="text-xs text-comment">Only you can see what you&apos;ve saved</p>
      <Button type="trigger" variant="link" className="shrink-0" onClick={handleOpenDialog}>
        <Plus size={12} />
        New Collection
      </Button>

      <FormProvider {...methods}>
        <Dialog isOpen={open} onClose={handleCloseDialog}>
          <DialogContent size="small" className="max-w-[400px]" title={VIEW_BY_STEP[step].title}>
            <DialogClose className="absolute right-2 top-2 focus-visible:outline-none">
              <XIcon className="hover:text-btn-ghost-hover" />
            </DialogClose>
            {VIEW_BY_STEP[step].renderComponent()}
            {step !== 1 && (
              <Button
                icon={ChevronLeft}
                variant="ghost"
                className="absolute left-2 top-2"
                onClick={handleStepBack}
              />
            )}
          </DialogContent>
        </Dialog>
      </FormProvider>
    </div>
  )
}

export default CreateCollectionSection
