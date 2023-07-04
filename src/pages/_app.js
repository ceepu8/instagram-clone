import ProgressBar from '@badrap/bar-of-progress'
import { SessionProvider } from 'next-auth/react'
import Router from 'next/router'
import 'react-slideshow-image/dist/styles.css'

import { AppProviders } from '@/contexts'
import DialogProvider from '@/contexts/DialogProvider'
import { ToastProvider } from '@/contexts/ToastProvider'
import '@/styles/bar-of-progress.css'

import '../styles/globals.css'

const progress = new ProgressBar({
  size: 2,
  color: 'var(--text)',
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
      <AppProviders pageProps={pageProps}>
        <ToastProvider>
          <DialogProvider />
          {getLayout(<Component {...pageProps} />)}
        </ToastProvider>
      </AppProviders>
    </SessionProvider>
  )
}
