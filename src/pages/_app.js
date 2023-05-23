import { AppProviders } from '@/contexts'
import '@/styles/globals.css'
import ProgressBar from '@badrap/bar-of-progress'
import { SessionProvider } from 'next-auth/react'
import Router from 'next/router'

const progress = new ProgressBar({
  size: 2,
  color: 'var(--primary)',
  className: 'bar-of-progress',
  delay: 100,
})

if (typeof window !== 'undefined') {
  progress.start()
  progress.finish()
}

Router.events.on('routeChangeStart', () => progress.start())
Router.events.on('routeChangeComplete', () => progress.finish())
Router.events.on('routeChangeError', () => progress.finish())

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <SessionProvider session={session}>
      <AppProviders pageProps={pageProps}>{getLayout(<Component {...pageProps} />)}</AppProviders>
    </SessionProvider>
  )
}
