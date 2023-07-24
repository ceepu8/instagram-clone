import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useDebouncedCallback } from 'use-debounce'

import { API } from '@/constants'
import { useAuth } from '@/hooks/query/auth'

export const useFollow = (onSuccess, onError) => {
  const { user } = useAuth()
  const {
    mutate: follow,
    isLoading,
    isSuccess,
  } = useMutation(
    async (params) => {
      const URL = API.FOLLOW.DO_FOLLOW.replace(':id', params.id)
      const response = await axios({
        method: 'POST',
        url: URL,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      return response.data
    },
    onSuccess,
    onError
  )

  const doFollow = useDebouncedCallback((req, options) => follow(req, options), 250)

  return { doFollow, isLoading, isSuccess }
}
