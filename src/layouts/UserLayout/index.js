import { useRouter } from 'next/router'

import { Footer } from '@/components/layout'
import { SHOW_FOOTER_ROUTES } from '@/utils/routers'

import AppSideBar from './AppSideBar'

const UserLayout = ({ children }) => {
  const router = useRouter()
  const showFooter = SHOW_FOOTER_ROUTES.includes(router.pathname)

  return (
    <main className="h-screen w-screen">
      <AppSideBar />
      <div className="bg-background md:pl-[var(--nav-narrow-width)] lg:pl-[var(--nav-medium-width)]">
        <div className="h-[calc(100vh-51px)] min-h-fit md:min-h-[calc(100vh-var(--footer-height)-64px)]">
          {children}
        </div>
        {showFooter && <Footer />}
      </div>
    </main>
  )
}

export default UserLayout
