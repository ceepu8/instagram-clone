import Navigation from '../Navigation'
import { Link } from '@/components/base'
import { InstagramLetterIcon } from '@/components/icons'

const SideBarLogo = () => {
  return (
    <Link href="/" className="pl-3 py-8 text-text">
      <InstagramLetterIcon width={110} height="auto" />
    </Link>
  )
}

const AppSideBar = () => {
  return (
    <div className="p-3 flex flex-col h-full border-solid border-r-[1.5px] border-divide max-h-full fixed max-w-[var(--nav-medium-width)] w-full">
      <SideBarLogo />
      <Navigation />
    </div>
  )
}

export default AppSideBar
