import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const useCreateCollection = (setCollection) => {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      posts: [],
    },
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
    const values = methods.getValues()
    setCollection((prev) => [...prev, { ...values }])
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
