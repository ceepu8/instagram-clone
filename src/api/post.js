/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useSession } from 'next-auth/react'

import { API, CLOUDINARY_NAME, CLOUDINARY_UPLOAD_PRESET, USER_POST_LIST_KEY } from '@/constants'

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

const useGetPostsByUser = (username) => {
  return useQuery(
    [USER_POST_LIST_KEY, username],
    async () => {
      const response = await axios({
        method: 'get',
        url: `/api/post/${username}`,
      })
      return response.data
    },
    {
      keepPreviousData: true,
      staleTime: Infinity,
      enabled: !!username,
    }
  )
}

export { useUploadPost, useGetPostsByUser }
