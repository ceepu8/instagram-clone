import UserLayout from '@/layouts/UserLayout'
import InDirectView from '@/views/DirectView/InDirectView'
import Head from 'next/head'

const InDirectPage = () => {
  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>
      <InDirectView />
    </>
  )
}

InDirectPage.getLayout = function getLayout(children) {
  return <UserLayout>{children}</UserLayout>
}

export default InDirectPage
