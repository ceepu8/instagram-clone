import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useId } from 'react'

import { Axios } from '@/configs'
import {
  API,
  GET_FOLLOWERS_KEY,
  GET_FOLLOWINGS_KEY,
  GET_FOLLOWS_KEY,
  USER_PROFILE_DETAIL_KEY,
} from '@/constants'
import { useAuth } from '@/hooks/query/auth'
import { useDebouncedCallback } from '@/hooks/shared'

export const useFollow = (user, onSuccess, variant = 'my_profile') => {
  const id = useId()
  const { user: authUser } = useAuth()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: async () => {
      const response = await Axios.post(API.FOLLOW.CREATE.replace(':id', user.id))
      return response.data
    },
    onSuccess: () => {
      onSuccess?.()

      const userKeyByVariant = {
        friend_profile: {
          username: user.username,
          type: 'followers',
        },
        my_profile: {
          username: authUser.username,
          type: 'followings',
        },
      }

      const { username, type } = userKeyByVariant[variant]

      const newFollowObj = {
        followedId: user.id,
        followingId: authUser.id,
        id,
        isFollowing: true,
      }

      queryClient.setQueryData([USER_PROFILE_DETAIL_KEY, username], (prev) => {
        return {
          ...prev,
          follow_by_viewer: true,
          [type]: [...prev[type], newFollowObj],
        }
      })
    },
    onError: () => {},
  })

  const doFollow = useDebouncedCallback(mutate)

  return { doFollow, isLoading, isSuccess }
}

export const useUnfollow = (user, onSuccess, variant = 'my_profile') => {
  const queryClient = useQueryClient()
  const { user: authUser } = useAuth()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: async () => {
      const response = await Axios.post(API.FOLLOW.DESTROY.replace(':id', user.id))
      return response.data
    },
    onSuccess: () => {
      onSuccess?.()
      const userKeyByVariant = {
        friend_profile: {
          username: user.username,
          type: 'followers',
          filterData: (prevData) =>
            prevData.filter((follower) => follower.followingId !== authUser.id),
        },
        my_profile: {
          username: authUser.username,
          type: 'followings',
          filterData: (prevData) =>
            prevData.filter((following) => following.followedId !== user.id),
        },
      }
      const { username, type, filterData } = userKeyByVariant[variant]

      queryClient.setQueryData([USER_PROFILE_DETAIL_KEY, username], (prev) => {
        return {
          ...prev,
          follow_by_viewer: false,
          [type]: filterData(prev[type]),
        }
      })
    },
    onError: () => {},
  })

  const doUnfollow = useDebouncedCallback(mutate)

  return { doUnfollow, isLoading, isSuccess }
}

export const useGetFollowers = (id, params) => {
  return useQuery(
    [GET_FOLLOWERS_KEY, id],
    async () => {
      const response = await Axios.get(API.FOLLOW.FOLLOWERS.replace(':id', id), { params })
      return response.data
    },
    {
      keepPreviousData: true,
      staleTime: 0,
      enabled: !!id,
    }
  )
}

export const useGetFollowings = (id, params) => {
  return useQuery(
    [GET_FOLLOWINGS_KEY, id],
    async () => {
      const response = await Axios.get(API.FOLLOW.FOLLOWINGS.replace(':id', id), { params })
      return response.data
    },
    {
      keepPreviousData: true,
      staleTime: 0,
      enabled: !!id,
    }
  )
}

export const useGetFollows = (ids) => {
  return useQuery(
    [
      GET_FOLLOWS_KEY,
      {
        user_ids: ids,
      },
    ],
    async () => {
      const response = await Axios.post(API.FOLLOW.GET, { userIds: ids })
      return response.data
    },
    {
      keepPreviousData: true,
      staleTime: 0,
      enabled: !!ids,
    }
  )
}
