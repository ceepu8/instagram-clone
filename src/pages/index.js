import { useSession } from 'next-auth/react'
import { useMemo } from 'react'

import UserLayout from '@/layouts/UserLayout'
import LoginView from '@/views/AuthViews/Login'
import HomeView from '@/views/HomeView'

const Home = () => {
  const session = useSession()

  const isAuthenticated = useMemo(() => session?.status === 'authenticated', [session?.status])

  return (
    <>
      {isAuthenticated ? (
        <UserLayout>
          <HomeView />
        </UserLayout>
      ) : (
        <LoginView />
      )}
    </>
  )
}

export default Home
