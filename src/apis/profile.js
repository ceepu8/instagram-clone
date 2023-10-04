import { useMutation, useQuery } from '@tanstack/react-query'

import { Axios } from '@/configs'
import {
  API,
  USER_REMOVE_PROFILE_IMAGE_KEY,
  USER_PROFILE_DETAIL_KEY,
  USER_UPDATE_PROFILE_IMAGE_KEY,
} from '@/constants'
import { useDebouncedCallback } from '@/hooks/shared'

export const getProfile = async (username) => {
  const response = await Axios.get('/api/profile', { params: { username } })
  return response.data
}

export const useGetProfile = (username) => {
  return useQuery(
    [USER_PROFILE_DETAIL_KEY, username],
    () => {
      return getProfile(username)
    },
    {
      staleTime: 0,
      refetchOnWindowFocus: true,
      enabled: !!username,
    }
  )
}

export const useUpdateProfileImage = (username, onSuccess, onError) => {
  const { mutate, isLoading, isSuccess } = useMutation([USER_UPDATE_PROFILE_IMAGE_KEY, username], {
    mutationFn: async (data) => {
      const response = await Axios.patch(API.PROFILE.IMAGE, { image: data })
      return response.data
    },
    onSuccess: () => {
      onSuccess?.()
    },
    onError: () => {
      onError?.()
    },
  })

  const doUpdateProfileImage = useDebouncedCallback(mutate)

  return { doUpdateProfileImage, isLoading, isSuccess }
}

export const useRemoveProfileImage = (username, onSuccess, onError) => {
  const { mutate, isLoading, isSuccess } = useMutation([USER_REMOVE_PROFILE_IMAGE_KEY, username], {
    mutationFn: async () => {
      const response = await Axios.delete(API.PROFILE.IMAGE)
      return response.data
    },
    onSuccess: () => {
      onSuccess?.()
    },
    onError: () => {
      onError?.()
    },
  })

  const doRemoveProfileImage = useDebouncedCallback(mutate)

  return { doRemoveProfileImage, isLoading, isSuccess }
}
