/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { useSession } from 'next-auth/react'

import { API, CLOUDINARY_NAME } from '@/constants'

const useUploadPost = () => {
  const session = useSession()

  const uploadPost = async (data) => {
    const response = await axios.post(API.POST.UPLOAD, data, {
      headers: {
        Authorization: `Bearer ${session.data.accessToken}`,
      },
    })
    return response
  }

  const uploadImage = async (data) => {
    const response = await axios({
      method: 'post',
      url: `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`,
      data,
    })
    return response
  }

  return { uploadImage, uploadPost }
}

export { useUploadPost }
