import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { Axios } from '@/configs'
import { API, USER_PROFILE_DETAIL_KEY } from '@/constants'
import { useToast } from '@/hooks/custom'
import { useDebouncedCallback } from '@/hooks/shared'

export const getProfile = async (username) => {
  const response = await Axios.get(API.PROFILE.ROOT, { params: { username } })
  return response.data
}

export const useGetProfile = (username) => {
  return useQuery([USER_PROFILE_DETAIL_KEY, username], () => getProfile(username), {
    staleTime: 0,
    refetchOnWindowFocus: true,
    enabled: !!username,
  })
}

export const useUpdateProfileImage = (username) => {
  const queryClient = useQueryClient()
  const toast = useToast()

  const { mutate, isLoading, isSuccess } = useMutation(
    async (data) => {
      const response = await Axios.patch(API.PROFILE.IMAGE, { image: data })
      return response.data
    },
    {
      onSuccess: () => {
        toast.success('Upload image success!')
        queryClient.invalidateQueries([USER_PROFILE_DETAIL_KEY, username])
      },
      onError: () => {
        toast.error('Oops! Something went wrong. Please try again later!')
      },
      enabled: !!username,
    }
  )

  const doUpdateProfileImage = useDebouncedCallback(mutate)

  return { doUpdateProfileImage, isLoading, isSuccess }
}

export const useRemoveProfileImage = (username) => {
  const queryClient = useQueryClient()
  const toast = useToast()

  const { mutate, isLoading, isSuccess } = useMutation(
    async () => {
      const response = await Axios.delete(API.PROFILE.IMAGE)
      return response.data
    },
    {
      onSuccess: () => {
        toast.success('Remove image success!')
        queryClient.invalidateQueries([USER_PROFILE_DETAIL_KEY, username])
      },
      onError: () => {
        toast.error('Oops! Something went wrong. Please try again later!')
      },
      enabled: !!username,
    }
  )

  const doRemoveProfileImage = useDebouncedCallback(mutate)

  return { doRemoveProfileImage, isLoading, isSuccess }
}
