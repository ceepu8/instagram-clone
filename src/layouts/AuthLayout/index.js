import Head from 'next/head'

import { Footer } from '@/components/shared'

import Header from './Header'

const AuthLayout = ({ children, isHeader = true }) => {
  return (
    <>
      <Head>
        <title>Authentication</title>
        <meta name="description" content="Smoky-Instagram" />
      </Head>
      <main className="flex h-screen flex-col justify-between gap-y-4 py-8">
        {isHeader && <Header />}
        <div className="flex flex-1 flex-col justify-center">{children}</div>
        <Footer />
      </main>
    </>
  )
}

export default AuthLayout
