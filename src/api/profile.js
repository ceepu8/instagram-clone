import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const getProfile = async (username) => {
  const response = await axios({
    method: 'get',
    url: '/api/profile',
    params: {
      username,
    },
  })
  return response.data
}

export const useGetProfile = (username) => {
  return useQuery(['get-profile', username], () => getProfile(username), {
    keepPreviousData: true,
    staleTime: Infinity,
    enabled: !!username,
  })
}
