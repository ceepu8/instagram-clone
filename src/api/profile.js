import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { useAuth } from '@/hooks/query/auth'

export const useGetProfile = () => {
  const { accessToken } = useAuth()

  return useQuery(
    ['get-profile'],
    async () => {
      const response = await axios({
        method: 'get',
        url: '/api/profile',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data
    },
    {
      keepPreviousData: true,
      staleTime: Infinity,
      enabled: !!accessToken,
    }
  )
}
