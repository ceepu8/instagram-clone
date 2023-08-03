import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useDebouncedCallback } from 'use-debounce'

import { API, GET_FOLLOWERS_KEY, GET_FOLLOWINGS_KEY, USER_PROFILE_DETAIL_KEY } from '@/constants'
import { useAuth } from '@/hooks/query/auth'

export const useFollow = (user) => {
  const { user: authUser } = useAuth()
  const queryClient = useQueryClient()
  const {
    mutate: follow,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: async () => {
      const URL = API.FOLLOW.CREATE.replace(':id', user.id)
      const response = await axios({
        method: 'POST',
        url: URL,
        headers: {
          Authorization: `Bearer ${authUser.token}`,
        },
      })
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries([USER_PROFILE_DETAIL_KEY, user.username])
    },
    onError: () => {},
  })

  const doFollow = useDebouncedCallback((req, options) => follow(req, options), 250)

  return { doFollow, isLoading, isSuccess }
}

export const useUnfollow = (user) => {
  const queryClient = useQueryClient()
  const { user: authUser } = useAuth()
  const {
    mutate: unfollow,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: async () => {
      const URL = API.FOLLOW.DESTROY.replace(':id', user.id)
      const response = await axios({
        method: 'POST',
        url: URL,
        headers: {
          Authorization: `Bearer ${authUser.token}`,
        },
      })
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries([USER_PROFILE_DETAIL_KEY, user.username])
    },
    onError: () => {},
  })

  const doUnfollow = useDebouncedCallback((req, options) => unfollow(req, options), 250)

  return { doUnfollow, isLoading, isSuccess }
}

export const useGetFollowers = (id, params) => {
  return useQuery(
    [GET_FOLLOWERS_KEY, id],
    async () => {
      const URL = API.FOLLOW.FOLLOWERS.replace(':id', id)
      const response = await axios({
        method: 'GET',
        url: URL,
        params,
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

export const useGetFollowings = (id, params) => {
  return useQuery(
    [GET_FOLLOWINGS_KEY, id],
    async () => {
      const URL = API.FOLLOW.FOLLOWINGS.replace(':id', id)
      const response = await axios({
        method: 'GET',
        url: URL,
        params,
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

export const useGetFollows = (ids) => {
  const { user: authUser } = useAuth()

  return useQuery(
    [GET_FOLLOWINGS_KEY, ids],
    async () => {
      const response = await axios({
        method: 'POST',
        url: API.FOLLOW.GET,
        headers: {
          Authorization: `Bearer ${authUser.token}`,
        },
        data: {
          userIds: ids,
        },
      })
      return response.data
    },
    {
      keepPreviousData: true,
      staleTime: Infinity,
      enabled: !!ids && !!ids.length,
    }
  )
}
