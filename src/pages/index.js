import { useAuth } from '@/hooks/query/auth'
import UserLayout from '@/layouts/UserLayout'
import LoginView from '@/views/AuthViews/Login'
import HomeView from '@/views/HomeView'

const Home = () => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <LoginView />
  }

  return (
    <UserLayout>
      <HomeView />
    </UserLayout>
  )
}

export default Home
