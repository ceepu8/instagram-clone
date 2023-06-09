import Head from 'next/head'
import React from 'react'

import UserLayout from '@/layouts/UserLayout'
import ProfileView from '@/views/ProfileView'

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>
      <ProfileView />
    </>
  )
}

ProfilePage.getLayout = function getLayout(children) {
  return <UserLayout>{children}</UserLayout>
}

export default ProfilePage
