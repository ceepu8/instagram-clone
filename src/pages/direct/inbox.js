import Head from 'next/head'

import UserLayout from '@/layouts/UserLayout'
import EmptyDirectView from '@/views/DirectView/EmptyDirectView'

const EmptyDirectPage = () => {
  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>
      <EmptyDirectView />
    </>
  )
}

EmptyDirectPage.getLayout = function getLayout(children) {
  return <UserLayout>{children}</UserLayout>
}

export default EmptyDirectPage
