import Head from 'next/head'
import { useRouter } from 'next/router'

import { Footer } from '@/components/layout'
import { SHOW_HEADER_ROUTES } from '@/utils/routers'

import Header from './Header'

const AuthLayout = ({ children }) => {
  const router = useRouter()
  const showHeader = SHOW_HEADER_ROUTES.includes(router.pathname)
  return (
    <>
      <Head>
        <title>Authentication</title>
        <meta name="description" content="Smoky-Instagram" />
      </Head>
      <main className="flex h-screen flex-col justify-between gap-y-4 py-8">
        {showHeader && <Header />}
        <div className="flex flex-1 flex-col justify-center">{children}</div>
        <Footer />
      </main>
    </>
  )
}

export default AuthLayout
