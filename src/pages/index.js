import Head from 'next/head'

import { useAuth } from '@/hooks/query/auth'
import AuthLayout from '@/layouts/AuthLayout'
import UserLayout from '@/layouts/UserLayout'
import LoginView from '@/views/AuthViews/Login'
import HomeView from '@/views/HomeView'

const Home = () => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return (
      <AuthLayout isHeader={false}>
        <Head>
          <title>Login</title>
        </Head>
        <LoginView />
      </AuthLayout>
    )
  }

  return (
    <UserLayout>
      <HomeView />
    </UserLayout>
  )
}

export default Home
