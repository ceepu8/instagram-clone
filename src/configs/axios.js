import axios from 'axios'
import { getSession, signOut } from 'next-auth/react'

import { API_ROOT, TIMEOUT } from '@/constants'

const instance = axios.create({
  baseURL: API_ROOT,
  timeout: TIMEOUT,
})

instance.interceptors.request.use(async (request) => {
  const session = await getSession()
  if (session) {
    request.headers.Authorization = `Bearer ${session.user.accessToken}`
  }
  return request
})

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      signOut({
        redirect: '/',
      })
    }
    return Promise.reject(error)
  }
)

export function setDefaultHeaders(headers) {
  Object.keys(headers).forEach((key) => {
    instance.defaults.headers.common[key] = headers[key]
  })
}

export default instance
