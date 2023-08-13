import { useForm } from 'react-hook-form'

import { useUploadPost } from '@/api'
import { Button } from '@/components/base'
import { ArrowLeftIcon } from '@/components/icons'
import { useImageUpload, useToast, useUploadPostDialog } from '@/hooks/custom'
import { postInitialValues } from '@/validates/post.schema'

import PreviewImageView from '../PreviewImageView'
import EditPostForm from './EditPostForm'

const StepSetting = ({ step, setStep, handleResetPost, onSubmit }) => {
  const onNext = () => {
    setStep((prev) => prev + 1)
    if (step === 3) {
      onSubmit()
    }
  }

  const onPrev = () => {
    setStep((prev) => prev - 1)
    if (step === 2) {
      handleResetPost()
    }
  }

  return (
    <div className="absolute -top-8 right-0 flex w-full items-center justify-between px-3">
      <Button variant="ghost" icon={ArrowLeftIcon} onClick={onPrev} />
      <Button variant="link" size="small" onClick={onNext}>
        {step === 3 ? 'Share' : 'Next'}
      </Button>
    </div>
  )
}

const EditPostView = ({ step, setStep }) => {
  const { previewImage, handleRemoveImage } = useImageUpload()
  const { uploadImage, uploadPost } = useUploadPost()
  const { onClose } = useUploadPostDialog()
  const toast = useToast()

  const handleResetPost = () => {
    handleRemoveImage()
    setStep(1)
  }

  const methods = useForm({
    mode: 'onChange',
    defaultValues: postInitialValues,
  })

  const onSubmit = async (data) => {
    setStep(4)

    try {
      const response = await uploadImage(previewImage)
      await uploadPost({ ...data, images: [response.data.url] })
      toast.success('Upload!')
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
      toast.error(err.message)
    } finally {
      setStep(1)
      onClose()
    }
  }

  return (
    <div className="relative flex h-full w-full items-center">
      <div className="flex h-full w-full transition duration-500">
        <StepSetting
          step={step}
          setStep={setStep}
          handleResetPost={handleResetPost}
          onSubmit={methods.handleSubmit(onSubmit)}
        />
        <PreviewImageView
          step={step}
          previewImage={previewImage}
          handleRemoveImage={handleResetPost}
        />
        <EditPostForm step={step} onSubmit={methods.handleSubmit(onSubmit)} methods={methods} />
      </div>
    </div>
  )
}

export default EditPostView
