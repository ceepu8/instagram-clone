import UserLayout from '@/layouts/UserLayout'
import HomeView from '@/views/HomeView'

const Home = () => {
  return <HomeView />
}

Home.getLayout = function getLayout(children) {
  return <UserLayout>{children}</UserLayout>
}

export default Home
