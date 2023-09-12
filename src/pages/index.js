import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

import { useAuth } from '@/hooks/query/auth'
import AuthLayout from '@/layouts/AuthLayout'
import UserLayout from '@/layouts/UserLayout'
import LoginView from '@/views/AuthViews/Login'
import HomeView from '@/views/HomeView'

const Home = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return (
      <UserLayout>
        <Head>
          <title>Instagram</title>
        </Head>
        <HomeView />
      </UserLayout>
    )
  }

  return (
    <AuthLayout showHeader={false}>
      <Head>
        <title>Login</title>
      </Head>
      <LoginView />
    </AuthLayout>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Home
