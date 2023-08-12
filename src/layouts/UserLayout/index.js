import AppSideBar from './AppSideBar'

const UserLayout = ({ children }) => {
  // const router = useRouter()

  // const { isAuthenticated } = useAuth()

  // if (!isAuthenticated) {
  //   router.push('/')
  // }

  return (
    <main className="h-screen w-screen">
      <AppSideBar />
      <div className="md:pl-[var(--nav-narrow-width)] lg:pl-[var(--nav-medium-width)]">
        {children}
      </div>
    </main>
  )
}

export default UserLayout
