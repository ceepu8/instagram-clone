import UserLayout from '@/layouts/UserLayout'
import EmptyDirectView from '@/views/DirectView/EmptyDirectView'
import Head from 'next/head'

const EmptyDirectPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <EmptyDirectView />
    </>
  )
}

EmptyDirectPage.getLayout = function getLayout(children) {
  return <UserLayout>{children}</UserLayout>
}

export default EmptyDirectPage
