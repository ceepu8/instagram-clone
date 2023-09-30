import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { collectionInitialValues } from '@/validates/collection.schema'

export const useCreateCollection = () => {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)

  const methods = useForm({
    mode: 'onChange',
    defaultValues: collectionInitialValues,
  })

  const handleOpenDialog = () => {
    setOpen(true)
    setStep(1)
  }

  const handleCloseDialog = () => {
    setOpen(false)
    methods.reset()
  }

  const handleStepBack = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmitFirstStep = () => {
    setStep(2)
  }

  const handleFinalSubmit = async () => {
    // TODO: call api create new collection
    handleCloseDialog()
  }

  return {
    open,
    step,
    methods,
    handleStepBack,
    handleOpenDialog,
    handleCloseDialog,
    handleSubmitFirstStep,
    handleFinalSubmit,
  }
}
