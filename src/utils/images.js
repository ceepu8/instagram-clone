/* eslint-disable no-console */
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { useRemoveProfileImage, useUpdateProfileImage } from '@/apis'
import { CLOUDINARY_NAME, CLOUDINARY_UPLOAD_PRESET, DEFAULT_ACCEPTED_FILE_TYPES } from '@/constants'
import { useToast } from '@/hooks/custom'

// utils/imageUtils.js

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

  const { error } = useToast()

  const { doUpdateProfileImage } = useUpdateProfileImage(username)
  const { doRemoveProfileImage } = useRemoveProfileImage(username)

  const uploadToCloudinary = async (imageUrl) => {
    const formData = new FormData()
    formData.append('file', imageUrl)
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

    const URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`
    const response = await axios.post(URL, formData)
    return response.data
  }

  const handleImageChange = async (event) => {
    setLoading(true)
    const selectedFile = event.target.files[0]
    const { isValid, message } = validateImage(selectedFile, ['image/jpeg'])
    if (!isValid) {
      error(message)
      setLoading(false)
      return
    }
    onCloseDialog()
    try {
      const response = await uploadToCloudinary(selectedFile)
      const imageUrl = response.url

      if (imageUrl) {
        await doUpdateProfileImage(imageUrl)
      }
    } catch (err) {
      error(err.message)
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const handleRemoveImage = async () => {
    try {
      setLoading(true)
      onCloseDialog()
      await doRemoveProfileImage()
    } catch (err) {
      error(err.message)
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return { onCloseDialog, open, setOpen, loading, setLoading, handleImageChange, handleRemoveImage }
}
