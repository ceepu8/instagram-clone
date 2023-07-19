import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetUserByName = (query) => {
  return useQuery(['get-users', query], async () => {
    const response = await axios({
      method: 'get',
      url: `/api/users`,
      params: {
        query,
      },
    })
    return response.data
  })
}

export { useGetUserByName }
