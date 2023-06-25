import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

import AppSideBar from './AppSideBar'

const UserLayout = ({ children }) => {
  const session = useSession()
  const router = useRouter()

  const isAuthenticated = useMemo(() => session?.status === 'authenticated', [session?.status])

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
