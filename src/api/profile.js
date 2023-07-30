import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { USER_PROFILE_DETAIL_KEY } from '@/constants'
import { useAuth } from '@/hooks/query/auth'

export const getProfile = async (username, token) => {
  const response = await axios({
    method: 'get',
    url: '/api/profile',
    params: {
      username,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const useGetProfile = (username) => {
  const { user: me } = useAuth()

  return useQuery(
    [USER_PROFILE_DETAIL_KEY, username],
    () => {
      return getProfile(username, me.token)
    },

    {
      keepPreviousData: true,
      staleTime: Infinity,
      enabled: !!username && !!me?.token,
    }
  )
}
