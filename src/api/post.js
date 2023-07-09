/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useSession } from 'next-auth/react'

import { API, CLOUDINARY_NAME, CLOUDINARY_UPLOAD_PRESET } from '@/constants'

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

  const uploadImage = async (image) => {
    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

    const response = await axios({
      method: 'post',
      url: `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`,
      data: formData,
    })
    return response
  }

  return { uploadImage, uploadPost }
}

const useGetPostsByUser = (id) => {
  return useQuery(
    ['get-posts', id],
    async () => {
      const response = await axios({
        method: 'get',
        url: `/api/post/${id}`,
      })
      return response.data
    },
    {
      keepPreviousData: true,
      staleTime: Infinity,
      enabled: !!id,
    }
  )
}

export { useUploadPost, useGetPostsByUser }
