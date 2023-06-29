import { isServer } from '@tanstack/react-query'
import axios from 'axios'
import { stringify } from 'query-string'

import { DEBUG } from '@/constants'

import Axios from '../configs/axios'

function buildURL(url, query) {
  let _url = url
  if (query) {
    _url += /\?/.test(url) ? '&' : '?'
    if (typeof query === 'object') {
      _url += stringify(query)
    } else {
      _url += query
    }
  }
  return _url
}

function _axiosMethod(method) {
  return Axios[method] // works
  // ...
}

// eslint-disable-next-line consistent-return
async function request({ method = 'get', url, query, params, success, failure, headers }) {
  const axiosMethod = _axiosMethod(method)
  if (typeof axiosMethod === 'function') {
    try {
      const result =
        method === 'get'
          ? await axiosMethod(buildURL(url, query), { headers })
          : await axiosMethod(buildURL(url, query), params, { headers })

      if (result.status === 200 || result.status === 201) {
        if (typeof success === 'function') {
          return success(result.data)
        }
        return result
      }
      throw result
    } catch (err) {
      if (typeof failure === 'function') {
        return failure({ message: err?.message })
      }
    }
  }
}

// eslint-disable-next-line consistent-return
async function fetch({ method = 'get', url, query, params, headers, moreOptions = {} }) {
  if (process.env.NODE_ENV !== `production`) {
    console.log(method, buildURL(url, query), params || ``)
  }
  const axiosMethod = _axiosMethod(method)
  if (typeof axiosMethod === 'function') {
    try {
      const response =
        method === `get` || method === `delete`
          ? await axiosMethod(buildURL(url, query), { headers, ...moreOptions })
          : await axiosMethod(buildURL(url, query), params, { headers, ...moreOptions })

      if (DEBUG && !isServer) {
        console.log('[RESPONSE] : ', response)
      }

      if (response.status === 200 || response.status === 201) {
        return response?.data
      }
      throw new Error(JSON.stringify(response))
    } catch (err) {
      if (err.response?.status === 401) {
        if (DEBUG) {
          console.log('[401] :', err)
        }
        const errorMessage = err.response.data.message
        if (errorMessage === 'UNAUTHORIZED') {
          if (typeof window !== 'undefined') {
            localStorage.clear()
            ;(async () => {
              await axios.post('/api/logout')
            })()
            window.location.replace('/login')
          }
        }
      } else if (err?.response?.data) {
        // if (err?.response?.data?.message) throw new Error(err?.response?.data?.message || 'Error')
      } else {
        const result = err?.toJSON?.()
        console.log(result?.message)
      }
      return err?.response?.data
    }
  }
}

export { buildURL, request, fetch }
