import { useForm } from 'react-hook-form'

import { useUploadPost } from '@/api'
import { Button } from '@/components/base'
import { ArrowLeftIcon } from '@/components/icons'
import { CLOUDINARY_UPLOAD_PRESET } from '@/constants'
import { useImageUpload, usePostDialog, useToast } from '@/hooks/custom'

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
    <div className="absolute -top-8 right-0 px-3 flex justify-between items-center w-full">
      <Button variant="text-secondary" icon={ArrowLeftIcon} onClick={onPrev} />
      <Button variant="text-primary" size="small" onClick={onNext}>
        {step === 3 ? 'Share' : 'Next'}
      </Button>
    </div>
  )
}

const EditPostView = ({ step, setStep }) => {
  const { previewImage, handleRemoveImage } = useImageUpload()
  const { uploadImage, uploadPost } = useUploadPost()
  const { onClose } = usePostDialog()
  const { success, error } = useToast()

  const handleResetPost = () => {
    handleRemoveImage()
    setStep(1)
  }

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      caption: '',
      images: [],
      videos: [],
    },
  })

  const onSubmit = async (data) => {
    setStep(4)

    const formData = new FormData()
    formData.append('file', previewImage)
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

    try {
      const response = await uploadImage(formData)
      await uploadPost({ ...data, images: [response.data.url] })
      success('Upload!')
    } catch (err) {
      error(err.message)
    } finally {
      setStep(1)
      onClose()
    }
  }

  return (
    <div className="relative w-full h-full flex items-center">
      <div className="h-full w-full flex transition duration-500">
        <StepSetting
          step={step}
          setStep={setStep}
          handleResetPost={handleResetPost}
          onSubmit={handleSubmit(onSubmit)}
        />
        <PreviewImageView
          step={step}
          previewImage={previewImage}
          handleRemoveImage={handleResetPost}
        />
        <EditPostForm
          step={step}
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          watch={watch}
          setValue={setValue}
        />
      </div>
    </div>
  )
}

export default EditPostView
