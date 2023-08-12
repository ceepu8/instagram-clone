import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import 'react-slideshow-image/dist/styles.css'

import { Routes } from '@/constants'
import { AppProviders } from '@/contexts'
import NextNProgress from '@/layouts/Progressbar'
import UserLayout from '@/layouts/UserLayout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  const [safeHydration, setSafeHydration] = useState(false)

  const isAuthPage = router.pathname === Routes.HOME // TODO: add some pages without sidebar

  const getLayout = useCallback(
    (children) => (isAuthPage ? children : <UserLayout>{children}</UserLayout>),
    [isAuthPage]
  )

  useEffect(() => setSafeHydration(true), [])

  return (
    <>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Smoky-Instagram" />
      </Head>
      <AppProviders locale={router.locale || 'en'} pageProps={pageProps}>
        <NextNProgress />
        {safeHydration && getLayout(<Component {...pageProps} />)}
      </AppProviders>
    </>
  )
}
