import AppSideBar from './AppSideBar'
import Head from 'next/head'

const UserLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Smoky-Instagram" />
      </Head>
      <div>
        <AppSideBar />
        <div className="pl-[var(--nav-medium-width)]">{children}</div>
      </div>
    </>
  )
}

export default UserLayout
