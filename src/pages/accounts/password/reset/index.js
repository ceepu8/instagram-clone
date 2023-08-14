import Head from 'next/head'
import React from 'react'

import AuthLayout from '@/layouts/AuthLayout'
import ResetPasswordView from '@/views/ResetPasswordView'

const ResetPasswordPage = () => {
  return (
    <>
      <Head>
        <title>Reset Password &#x2022; Instagram</title>
      </Head>
      <div className="flex h-full max-h-screen items-center justify-center">
        <ResetPasswordView />
      </div>
    </>
  )
}

ResetPasswordPage.getLayout = function getLayout(children) {
  return <AuthLayout>{children}</AuthLayout>
}

export default ResetPasswordPage
