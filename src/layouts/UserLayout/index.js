import Head from 'next/head'
import { useRouter } from 'next/navigation'

import { useAuth } from '@/hooks/query/auth'

import AppSideBar from './AppSideBar'

const UserLayout = ({ children }) => {
  const router = useRouter()

  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    router.push('/')
  }
  return (
    <>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Smoky-Instagram" />
      </Head>
      <div className="w-screen h-screen">
        <AppSideBar />
        <div className="pl-[var(--nav-medium-width)]">{children}</div>
      </div>
    </>
  )
}

export default UserLayout
