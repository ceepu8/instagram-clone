import axios from 'axios'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'

import { ToastContext } from '@/contexts/ToastProvider'

import { useToast } from '../custom'

export const useRegister = () => {
  const [isLoading, setLoading] = useState(false)
  const router = useRouter()

  const onError = (error) => {
    console.log(error)
  }

  const doRegister = async (data) => {
    setLoading(true)
    axios
      .post('/api/register', data)
      .then(() => {
        signIn('credentials', { ...data, redirect: false }).then(async ({ error, ok }) => {
          setLoading(false)
          if (error) {
            onError(error)
          } else {
            router.replace('/', undefined, { scroll: true })
          }
        })
      })
      .finally(() => setLoading(false))
  }

  return { doRegister, isLoading }
}

export const useLogin = () => {
  const [isLoading, setLoading] = useState(false)
  const toast = useToast()
  const router = useRouter()

  const onError = (err) => {
    toast.error(err)
  }

  const doLogin = async (data) => {
    setLoading(true)

    signIn('credentials', { ...data, redirect: false }).then(async ({ error, ok }) => {
      setLoading(false)
      if (error) {
        onError(error)
      } else {
        router.replace('/', undefined, { scroll: true })
      }
    })
  }

  return { doLogin, isLoading }
}
