import { useRouter } from 'next/router'

import { Footer } from '@/components/layout'
import { cn } from '@/utils'
import { SHOW_FOOTER_ROUTES } from '@/utils/routers'

import AppSideBar from './AppSideBar'

const UserLayout = ({ children }) => {
  const router = useRouter()
  const showFooter = SHOW_FOOTER_ROUTES.includes(router.pathname)

  return (
    <main className="h-screen w-screen">
      <AppSideBar />
      <div className="flex h-full flex-col bg-background md:pl-[var(--nav-narrow-width)] lg:pl-[var(--nav-medium-width)]">
        <div className="flex-1">{children}</div>
        {showFooter && <Footer />}
      </div>
    </main>
  )
}

export default UserLayout
