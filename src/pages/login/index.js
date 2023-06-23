import Head from 'next/head'

import LoginView from '@/views/AuthViews/Login'

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>
      <LoginView />
    </>
  )
}

export default LoginPage
