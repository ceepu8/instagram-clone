import { useQuery } from '@tanstack/react-query'

import { Axios } from '@/configs'
import { USER_SEARCH_LIST_KEY } from '@/constants'

export const useGetUserByName = (params) => {
  return useQuery([USER_SEARCH_LIST_KEY, params], async () => {
    const response = await Axios.get('/api/user', { params })
    return response.data
  })
}
