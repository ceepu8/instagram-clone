import Head from 'next/head'

import AppSideBar from './AppSideBar'

const UserLayout = ({ children }) => {
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
