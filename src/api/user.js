import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { USER_SEARCH_LIST_KEY } from '@/constants'

const useGetUserByName = (queries) => {
  return useQuery([USER_SEARCH_LIST_KEY, queries], async () => {
    const response = await axios({
      method: 'get',
      url: `/api/user`,
      params: {
        ...queries,
      },
    })
    return response.data
  })
}

export { useGetUserByName }
