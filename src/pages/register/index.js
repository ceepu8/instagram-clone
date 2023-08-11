import Head from 'next/head'

import AuthLayout from '@/layouts/AuthLayout'
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

RegisterPage.getLayout = function getLayout(children) {
  return <AuthLayout isHeader={false}>{children}</AuthLayout>
}

export default RegisterPage
