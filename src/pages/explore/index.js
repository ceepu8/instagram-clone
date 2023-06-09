import Head from 'next/head'

import UserLayout from '@/layouts/UserLayout'
import ExploreView from '@/views/ExploreView'

const ExplorePage = () => {
  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>
      <ExploreView />
    </>
  )
}

ExplorePage.getLayout = function getLayout(children) {
  return <UserLayout>{children}</UserLayout>
}

export default ExplorePage
