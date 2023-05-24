import AppSideBar from './AppSideBar'
import Head from 'next/head'

const UserLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Instagram Clone</title>
        <meta name="description" content="Smoky-Instagram" />
      </Head>
      <div className="grid grid-cols-4 min-h-screen">
        <div className="col-span-1">
          <AppSideBar />
        </div>
        <div className="col-span-3">{children}</div>
      </div>
    </>
  )
}

export default UserLayout
