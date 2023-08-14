import Head from 'next/head'

import RegisterView from '@/views/AuthViews/Register'

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterView />
    </>
  )
}

export default RegisterPage
