import Head from 'next/head'

import RegisterView from '@/views/AuthViews/Register'

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>
      <RegisterView />
    </>
  )
}

export default RegisterPage
