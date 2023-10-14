import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { Link } from '@/components/base'
import {
  CompassIcon,
  HomeIcon,
  MessengerIcon,
  NotificationsIcon,
  PlusIcon,
  ReelsIcon,
  SearchIcon,
} from '@/components/icons'
import { ProfileAvatar } from '@/components/profile'
import { MENU_NAV_TYPES, Routes } from '@/constants'
import { SIDEBAR_MENU_KEYS } from '@/constants/Keys'
import { useUploadPostDialog } from '@/hooks/custom'
import { useAuth } from '@/hooks/query/auth'
import { checkRouteActive } from '@/utils'

import MenuPopover from './MenuPopover'
import NavItem from './NavItem'
import ItemLabel from './components/ItemLabel'

const ProfileNavItem = ({ active, panelTriggered }) => {
  const { user } = useAuth()
  const { t } = useTranslation()

  const href = Routes.PROFILE.replace('[username]', user?.username)

  const rootClassnames =
    'cursor-pointer gap-x-4 rounded-lg border border-solid border-transparent transition-[background] duration-150 hover:bg-nav-hover'
  return (
    <li className={rootClassnames}>
      <Link href={href} disabled={!user?.username} className="block">
        <div className="flex items-center gap-x-4 p-2 font-medium text-default">
          <ProfileAvatar size={28} image={user?.image} active={active} />
          <ItemLabel isVisible={!panelTriggered} active={active} label={t('navbar.profile')} />
        </div>
      </Link>
    </li>
  )
}

const DesktopNavigation = ({ panel, togglePanel }) => {
  const { user } = useAuth()
  const router = useRouter()

  const { isOpen: isUploadPostDialogOpen, onOpen: onOpenUploadPostDialog } = useUploadPostDialog()

  const { t } = useTranslation()

  const getActive = (type, route) => {
    // active trigger panel nav item
    if (panel) {
      return type === panel
    }
    // active trigger dialog nav item (create post feature)
    if (type === SIDEBAR_MENU_KEYS.CREATE) {
      return isUploadPostDialogOpen
    }

    // if dialog is triggered, block other active items
    if (type !== SIDEBAR_MENU_KEYS.CREATE && isUploadPostDialogOpen) {
      return false
    }

    // active nav item by routes
    return checkRouteActive(router, route)
  }

  const NAV_ITEMS = [
    {
      name: SIDEBAR_MENU_KEYS.HOME,
      route: Routes.HOME,
      icon: HomeIcon,
      label: t('navbar.home'),
      type: MENU_NAV_TYPES.LINK,
    },
    {
      name: SIDEBAR_MENU_KEYS.SEARCH,
      onPress: () => {
        togglePanel(SIDEBAR_MENU_KEYS.SEARCH)
      },
      icon: SearchIcon,
      label: t('navbar.search'),
      type: MENU_NAV_TYPES.TRIGGER,
    },
    {
      name: SIDEBAR_MENU_KEYS.EXPLORE,
      route: Routes.EXPLORE,
      icon: CompassIcon,
      label: t('navbar.explore'),
      type: MENU_NAV_TYPES.LINK,
    },
    {
      name: SIDEBAR_MENU_KEYS.REELS,
      route: Routes.REELS.replace('[id]', 123),
      icon: ReelsIcon,
      label: t('navbar.reels'),
      type: MENU_NAV_TYPES.LINK,
    },
    {
      name: SIDEBAR_MENU_KEYS.MESSAGES,
      route: Routes.DIRECT_INBOX,
      icon: MessengerIcon,
      label: t('navbar.messages'),
      type: MENU_NAV_TYPES.LINK,
    },
    {
      name: SIDEBAR_MENU_KEYS.NOTIFICATIONS,
      onPress: () => {
        togglePanel(SIDEBAR_MENU_KEYS.NOTIFICATIONS)
      },
      icon: NotificationsIcon,
      label: t('navbar.notifications'),
      type: MENU_NAV_TYPES.TRIGGER,
    },
    {
      name: SIDEBAR_MENU_KEYS.CREATE,
      onPress: () => {
        onOpenUploadPostDialog()
      },
      icon: PlusIcon,
      label: t('navbar.create'),
      type: MENU_NAV_TYPES.TRIGGER,
    },
  ]

  const renderItem = (item) => {
    const active = getActive(item.name, item.route)
    return <NavItem key={item?.name} active={active} panelTriggered={panel} item={item} />
  }

  return (
    <nav className="flex flex-1 flex-col justify-between">
      <ul className="space-y-2">
        {NAV_ITEMS.map(renderItem)}

        <ProfileNavItem
          active={getActive(
            SIDEBAR_MENU_KEYS.PROFILE,
            Routes.PROFILE.replace('[username]', user?.username)
          )}
          panelTriggered={panel}
        />
      </ul>

      <MenuPopover panel={panel} />
    </nav>
  )
}

export default DesktopNavigation
