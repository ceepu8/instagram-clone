import { Footer } from '@/components/shared'

import AppSideBar from './AppSideBar'

const UserLayout = ({ children, isFooter = true }) => {
  // const router = useRouter()

  // const { isAuthenticated } = useAuth()

  // if (!isAuthenticated) {
  //   router.push('/')
  // }

  return (
    <main className="h-screen w-screen">
      <AppSideBar />
      <div className="flex min-h-screen flex-col bg-background pb-16 md:pl-[var(--nav-narrow-width)] lg:pl-[var(--nav-medium-width)]">
        <div className="flex-1">{children}</div>
        {isFooter && <Footer />}
      </div>
    </main>
  )
}

export default UserLayout
