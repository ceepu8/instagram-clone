/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query'

import { Axios } from '@/configs'
import { API, CLOUDINARY_NAME, CLOUDINARY_UPLOAD_PRESET, USER_POST_LIST_KEY } from '@/constants'

export const useUploadPost = () => {
  const uploadPost = async (dataRequest) => {
    const response = await Axios.post(API.POST.UPLOAD, dataRequest)
    return response
  }

  const uploadImage = async (image) => {
    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

    const URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`

    const response = await Axios.post(URL, formData)
    return response
  }

  return { uploadImage, uploadPost }
}

export const useGetPostsByUser = (username) => {
  return useQuery(
    [USER_POST_LIST_KEY, username],
    async () => {
      const response = await Axios.get(`/api/post/${username}`)
      return response.data
    },
    {
      keepPreviousData: true,
      staleTime: Infinity,
      enabled: !!username,
    }
  )
}
