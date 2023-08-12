import Head from 'next/head'

import Footer from './Footer'
import Header from './Header'

const AuthLayout = ({ children, isHeader = true }) => {
  return (
    <>
      <Head>
        <title>Authentication</title>
        <meta name="description" content="Smoky-Instagram" />
      </Head>
      <main className="min-h-screen flex flex-col">
        {isHeader && <Header />}
        <div className="flex-1 flex flex-col justify-center">{children}</div>
        <Footer />
      </main>
    </>
  )
}

export default AuthLayout
