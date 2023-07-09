import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { useAuth } from '@/hooks/query/auth'

export const getProfile = async (accessToken) => {
  const response = await axios({
    method: 'get',
    url: '/api/profile',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  return response.data
}

export const useGetProfile = () => {
  const { user, accessToken } = useAuth()

  return useQuery(['get-profile', user.email], () => getProfile(accessToken), {
    keepPreviousData: true,
    staleTime: Infinity,
    enabled: !!accessToken && !!user,
  })
}
