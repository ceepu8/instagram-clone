import { useQuery } from '@tanstack/react-query'

import { Axios } from '@/configs'
import { USER_PROFILE_DETAIL_KEY } from '@/constants'

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
