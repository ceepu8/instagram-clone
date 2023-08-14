import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import 'react-slideshow-image/dist/styles.css'

import { Routes } from '@/constants'
import { AppProviders } from '@/contexts'
import AuthLayout from '@/layouts/AuthLayout'
import NextNProgress from '@/layouts/Progressbar'
import UserLayout from '@/layouts/UserLayout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  const [safeHydration, setSafeHydration] = useState(false)

  const ROUTES_BY_LAYOUT = {
    [Routes.HOME]: {
      layout: null,
    },
    [Routes.REGISTER]: {
      layout: null,
    },
    [Routes.RESET_PASSWORD]: {
      layout: AuthLayout,
      isHeader: true,
    },
    [Routes.EXPLORE]: {
      layout: UserLayout,
      isFooter: true,
    },
    [Routes.REELS]: {
      layout: UserLayout,
      isFooter: false,
    },
    [Routes.PROFILE]: {
      layout: UserLayout,
      isFooter: true,
    },
    [Routes.DIRECT_INBOX]: {
      layout: UserLayout,
      isFooter: false,
    },
    [Routes.DIRECT_DETAIL]: {
      layout: UserLayout,
      isFooter: false,
    },
  }

  const getLayout = useCallback(
    (children) => {
      const { layout: Layout, ...props } = ROUTES_BY_LAYOUT[router.pathname]
      if (!Layout) {
        return children
      }
      return <Layout {...props}>{children}</Layout>
    },
    [router.pathname]
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
