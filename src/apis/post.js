/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

import { Axios } from '@/configs'
import { API, CLOUDINARY_NAME, CLOUDINARY_UPLOAD_PRESET, USER_POST_LIST_KEY } from '@/constants'
import { useAuth } from '@/hooks/query/auth'

export const useUploadPost = () => {
  const queryClient = useQueryClient()
  const { user } = useAuth()

  const uploadPost = async (dataRequest) => {
    const response = await Axios.post(API.POST.UPLOAD, dataRequest)

    queryClient.invalidateQueries(USER_POST_LIST_KEY, user.username)
    return response
  }

  const uploadImage = async (image) => {
    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

    const URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`

    const response = await axios({
      method: 'post',
      url: URL,
      data: formData,
    })
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
