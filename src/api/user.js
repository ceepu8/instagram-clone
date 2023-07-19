import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetUserByName = (queries) => {
  return useQuery(['get-users', queries], async () => {
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
