import Head from 'next/head'

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

export default ResetPasswordPage
