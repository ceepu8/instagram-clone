import axios from 'axios'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'

import { useToast } from '../custom'

export const useRegister = () => {
  const [isLoading, setLoading] = useState(false)
  const router = useRouter()
  const toast = useToast()

  const onError = (err) => {
    toast.error(err)
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

export const useLogout = () => {
  const router = useRouter()

  const handleLogout = async () => {
    await signOut({ redirect: false })
    localStorage.clear()
    router.push('/')
  }

  return handleLogout
}

export const useAuth = () => {
  const session = useSession()

  const auth = useMemo(
    () => ({
      isAuthenticated: session?.status === 'authenticated',
      user: session?.data?.user,
      accessToken: session?.data?.accessToken,
    }),
    [session]
  )

  return { ...auth }
}
