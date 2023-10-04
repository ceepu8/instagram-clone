import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { useRemoveProfileImage, useUpdateProfileImage } from '@/apis'
import { CLOUDINARY_NAME, CLOUDINARY_UPLOAD_PRESET } from '@/constants'
import { useToast } from '@/hooks/custom'

// utils/imageUtils.js
const DEFAULT_ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/jpg']
const MAX_FILE_SIZE = 10 * 1024 * 1024

export const validateImage = (file, acceptedFileTypes = DEFAULT_ACCEPTED_FILE_TYPES) => {
  if (!file) {
    return {
      message: 'Please upload file name',
      isValid: false,
    }
  }
  if (file.size > MAX_FILE_SIZE) {
    return {
      message: 'File size must be below 10MB',
      isValid: false,
    }
  }
  const acceptedTypesArray = Array.isArray(acceptedFileTypes)
    ? acceptedFileTypes
    : acceptedFileTypes.split(',').map((type) => type.trim())

  if (!acceptedTypesArray.includes(file.type)) {
    return {
      message: `Invalid file type. Accept ${acceptedTypesArray} only`,
      isValid: false,
    }
  }
  return { message: 'Success', isValid: true }
}

export const useProfileImageDialog = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const username = router?.query?.username || ''

  const onCloseDialog = () => setOpen(false)

  const { error, success } = useToast()
  const { doUpdateProfileImage } = useUpdateProfileImage(
    username,
    () => success('Upload image success'),
    () => error('Oops! Something went wrong. Please try again later!')
  )
  const { doRemoveProfileImage } = useRemoveProfileImage(
    username,
    () => success('Remove image success'),
    () => error('Oops! Something went wrong. Please try again later!')
  )

  const uploadToCloudinary = async (imageUrl) => {
    const formData = new FormData()
    formData.append('file', imageUrl)
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

    const URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`
    const response = await axios.post(URL, formData)
    return response.data
  }

  const handleImageChange = async (event) => {
    const selectedFile = event.target.files[0]
    const { isValid, message } = validateImage(selectedFile, ['image/jpeg'])
    if (!isValid) {
      error(message)
      return
    }
    setLoading(true)
    onCloseDialog()
    const response = await uploadToCloudinary(selectedFile)
    const imageUrl = response.url
    await doUpdateProfileImage(imageUrl)
    setLoading(false)
  }

  const handleRemoveImage = async () => {
    setLoading(true)
    onCloseDialog()
    await doRemoveProfileImage()
    setLoading(false)
  }

  return { onCloseDialog, open, setOpen, loading, setLoading, handleImageChange, handleRemoveImage }
}
