import UserLayout from '@/layouts/UserLayout'
import ExploreView from '@/views/ExploreView'
import Head from 'next/head'
import React from 'react'

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
