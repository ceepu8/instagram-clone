import { appWithTranslation } from 'next-i18next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import 'react-slideshow-image/dist/styles.css'

import { AppProviders } from '@/contexts'
import AuthLayout from '@/layouts/AuthLayout'
import NextNProgress from '@/layouts/Progressbar'
import UserLayout from '@/layouts/UserLayout'
import '@/styles/globals.css'
import { AUTH_LAYOUT_ROUTES, USER_LAYOUT_ROUTES } from '@/utils/routers'

function App({ Component, pageProps }) {
  const router = useRouter()

  const [safeHydration, setSafeHydration] = useState(false)

  const getLayout = useCallback(
    (children) => {
      if (AUTH_LAYOUT_ROUTES.includes(router.pathname)) {
        return <AuthLayout>{children}</AuthLayout>
      }
      if (USER_LAYOUT_ROUTES.includes(router.pathname)) {
        return <UserLayout>{children}</UserLayout>
      }
      return children
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

export default appWithTranslation(App)
