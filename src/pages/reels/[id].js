import UserLayout from '@/layouts/UserLayout'
import ReelsView from '@/views/ReelsView'
import Head from 'next/head'
import React from 'react'

const ReelsPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <ReelsView />
    </>
  )
}

ReelsPage.getLayout = function getLayout(children) {
  return <UserLayout>{children}</UserLayout>
}

export default ReelsPage
