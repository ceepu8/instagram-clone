import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useDebouncedCallback } from 'use-debounce'

import { API } from '@/constants'
import { useAuth } from '@/hooks/query/auth'

export const useFollow = (onSuccess, onError) => {
  const { user } = useAuth()
  const {
    mutate: follow,
    isLoading,
    isSuccess,
  } = useMutation(
    async (params) => {
      const URL = API.FOLLOW.CREATE.replace(':id', params.id)
      const response = await axios({
        method: 'POST',
        url: URL,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      return response.data
    },
    onSuccess,
    onError
  )

  const doFollow = useDebouncedCallback((req, options) => follow(req, options), 250)

  return { doFollow, isLoading, isSuccess }
}

export const useUnfollow = (onSuccess, onError) => {
  const { user } = useAuth()
  const {
    mutate: unfollow,
    isLoading,
    isSuccess,
  } = useMutation(
    async (params) => {
      const URL = API.FOLLOW.DESTROY.replace(':id', params.id)
      const response = await axios({
        method: 'POST',
        url: URL,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      return response.data
    },
    onSuccess,
    onError
  )

  const doUnfollow = useDebouncedCallback((req, options) => unfollow(req, options), 250)

  return { doUnfollow, isLoading, isSuccess }
}

export const useIsFollow = (id) => {
  const { user } = useAuth()

  return useQuery(
    ['is-follow', id],
    async () => {
      const response = await axios({
        method: 'GET',
        url: `/api/follow/${id}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
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
