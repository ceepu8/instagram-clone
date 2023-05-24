import UserLayout from '@/layouts/UserLayout'
import HomeView from '@/views/HomeView'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeView />
    </>
  )
}

Home.getLayout = function getLayout(children) {
  return <UserLayout>{children}</UserLayout>
}

export default Home
