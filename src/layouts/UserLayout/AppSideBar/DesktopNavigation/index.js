import Image from 'next/image'

import {
  Compass,
  FacebookMessengerIcon,
  Film,
  Heart,
  Home,
  PlusSquare,
  Search,
} from '@/components/icons'
import { Routes } from '@/constants'
import Assets from '@/constants/Assets'
import { SIDEBAR_MENU_KEYS } from '@/constants/Keys'
import { useUploadPostDialog } from '@/hooks/custom'
import { useAuth } from '@/hooks/query/auth'
import { cn } from '@/utils'

import MenuPopover from './MenuPopover'
import NavItem from './NavItem'

const DesktopNavigation = ({ navSelected, setNavSelected }) => {
  const { user } = useAuth()
  const doSetNavSelected = (key) => setNavSelected((prev) => (prev !== key ? key : ''))
  const { onOpen } = useUploadPostDialog()

  const NAV_ITEMS = [
    {
      key: SIDEBAR_MENU_KEYS.HOME,
      route: Routes.HOME,
      icon: Home,
      label: 'Home',
    },
    {
      key: SIDEBAR_MENU_KEYS.SEARCH,
      onPress: () => {
        doSetNavSelected(SIDEBAR_MENU_KEYS.SEARCH)
      },
      icon: Search,
      label: 'Search',
    },
    {
      key: SIDEBAR_MENU_KEYS.EXPLORE,
      route: Routes.EXPLORE,
      icon: Compass,
      label: 'Explore',
    },
    {
      key: SIDEBAR_MENU_KEYS.REELS,
      route: `${Routes.REELS}/123`,
      icon: Film,
      label: 'Reels',
    },
    {
      key: SIDEBAR_MENU_KEYS.MESSAGES,
      route: Routes.DIRECT_INBOX,
      icon: FacebookMessengerIcon,
      label: 'Messages',
    },
    {
      key: SIDEBAR_MENU_KEYS.NOTIFICATIONS,
      onPress: () => {
        doSetNavSelected(SIDEBAR_MENU_KEYS.NOTIFICATIONS)
      },
      icon: Heart,
      label: 'Notifications',
    },
    {
      key: SIDEBAR_MENU_KEYS.CREATE,
      onPress: () => onOpen(),
      icon: PlusSquare,
      label: 'Create',
    },
    {
      key: SIDEBAR_MENU_KEYS.PROFILE,
      route: `${Routes.PROFILE}/${user?.id}?tab=posts`,
      label: 'Profile',
      content: (
        <div className="shrink-0">
          <Image
            width={24}
            height={24}
            src={user?.image || Assets.COMMON.PLACEHOLDER}
            alt="profile-image"
            className="rounded-full"
          />
        </div>
      ),
    },
  ]

  const renderNavItems = () => {
    return (
      <div className="space-y-2">
        {NAV_ITEMS.map((item) => {
          const isNavSelected = item.key === navSelected
          return (
            <NavItem key={item?.key} isSelecting={isNavSelected} {...item}>
              {item?.content}
              <span
                className={cn(
                  'hidden lg:block',
                  'duration-[100ms] delay-[50ms] transition-all',
                  navSelected ? 'invisible opacity-0' : 'visible opacity-100'
                )}
              >
                {item?.label}
              </span>
            </NavItem>
          )
        })}
      </div>
    )
  }
  return (
    <div className="flex justify-between flex-1 flex-col">
      {renderNavItems()}
      <MenuPopover navSelected={navSelected} />
    </div>
  )
}

export default DesktopNavigation
