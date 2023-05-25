import UserLayout from '@/layouts/UserLayout'
import ProfileView from '@/views/ProfileView'
import Head from 'next/head'
import React from 'react'

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <ProfileView />
    </>
  )
}

ProfilePage.getLayout = function getLayout(children) {
  return <UserLayout>{children}</UserLayout>
}

export default ProfilePage
