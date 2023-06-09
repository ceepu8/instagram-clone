import Head from 'next/head'

import UserLayout from '@/layouts/UserLayout'
import ReelsView from '@/views/ReelsView'

const ReelsPage = () => {
  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>
      <ReelsView />
    </>
  )
}

ReelsPage.getLayout = function getLayout(children) {
  return <UserLayout>{children}</UserLayout>
}

export default ReelsPage
