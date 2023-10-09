import Link from 'next/link'
import { useRouter } from 'next/router'

import { CompassIcon, HomeIcon, MessengerIcon, PlusIcon, ReelsIcon } from '@/components/icons'
import { ProfileAvatar } from '@/components/profile'
import { Routes } from '@/constants'
import { SIDEBAR_MENU_KEYS } from '@/constants/Keys'
import { useUploadPostDialog } from '@/hooks/custom'
import { useAuth } from '@/hooks/query/auth'
import { checkRouteActive, cn } from '@/utils'

import NavItem from './NavItem'

const ProfileNavItem = () => {
  const { user } = useAuth()
  const router = useRouter()
  const active = checkRouteActive(router, Routes.PROFILE.replace('[username]', user?.username))

  return (
    <div className="flex-1 shrink-0">
      <Link href={Routes.PROFILE.replace('[username]', user?.username)}>
        <li className="flex cursor-pointer justify-center gap-x-4 rounded-lg border border-solid border-transparent p-2 font-medium text-default transition-all duration-150">
          <ProfileAvatar size={24} image={user?.image} active={active} />
        </li>
      </Link>
    </div>
  )
}

const MobileNavigation = () => {
  const { onOpen } = useUploadPostDialog()

  const NAV_ITEMS = [
    {
      key: SIDEBAR_MENU_KEYS.HOME,
      route: Routes.HOME,
      icon: HomeIcon,
      label: 'Home',
    },
    {
      key: SIDEBAR_MENU_KEYS.EXPLORE,
      route: Routes.EXPLORE,
      icon: CompassIcon,
      label: 'Search',
    },
    {
      key: SIDEBAR_MENU_KEYS.REELS,
      route: Routes.REELS.replace('[id]', 123),
      icon: ReelsIcon,
      label: 'Reels',
    },
    {
      key: SIDEBAR_MENU_KEYS.CREATE,
      onPress: () => onOpen(),
      icon: PlusIcon,
      label: 'Create',
    },
    {
      key: SIDEBAR_MENU_KEYS.MESSAGES,
      route: Routes.DIRECT_INBOX,
      icon: MessengerIcon,
      label: 'Messages',
    },
  ]

  return (
    <div
      className={cn(
        'h-[var(--mobile-nav-bar-height)] w-full bg-background px-6',
        'fixed bottom-0 left-0 z-50',
        'flex items-center justify-between',
        'border-t border-divide',
        'md:hidden'
      )}
    >
      {NAV_ITEMS.map((item) => {
        return <NavItem key={item.key} {...item} />
      })}
      <ProfileNavItem />
    </div>
  )
}

export default MobileNavigation
