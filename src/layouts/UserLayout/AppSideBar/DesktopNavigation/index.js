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
import { Routes } from '@/constants'
import { SIDEBAR_MENU_KEYS } from '@/constants/Keys'
import { useUploadPostDialog } from '@/hooks/custom'
import { useAuth } from '@/hooks/query/auth'
import { checkRouteActive } from '@/utils'

import MenuPopover from './MenuPopover'
import NavItem from './NavItem'
import TriggerItem from './TriggerItem'
import ItemLabel from './components/ItemLabel'

const ProfileNavItem = ({ active, panelTriggered }) => {
  const { user } = useAuth()
  const { t } = useTranslation()

  return (
    <Link href={Routes.PROFILE.replace('[username]', user?.username)} className="block">
      <li className="flex cursor-pointer items-center gap-x-4 rounded-lg border border-solid border-transparent p-2 font-medium text-default transition-[background] duration-150 hover:bg-nav-hover">
        <div className="shrink-0 border-[2px] border-transparent">
          <ProfileAvatar size={24} image={user?.image} active={active} />
        </div>
        <ItemLabel isVisible={!panelTriggered} active={active} label={t('navbar.profile')} />
      </li>
    </Link>
  )
}

const DesktopNavigation = ({ panel, togglePanel }) => {
  const { user } = useAuth()
  const router = useRouter()

  const { isOpen: isUploadPostDialogOpen, onOpen: onOpenUploadPostDialog } = useUploadPostDialog()

  const { t } = useTranslation()

  const getActive = (key, route) => {
    if (panel) {
      return key === panel
    }

    if (key === SIDEBAR_MENU_KEYS.CREATE) {
      return isUploadPostDialogOpen
    }

    if (key !== SIDEBAR_MENU_KEYS.CREATE && isUploadPostDialogOpen) {
      return false
    }

    return checkRouteActive(router, route)
  }

  const NAV_ITEMS = [
    {
      key: SIDEBAR_MENU_KEYS.HOME,
      route: Routes.HOME,
      icon: HomeIcon,
      label: t('navbar.home'),
      component: NavItem,
    },
    {
      key: SIDEBAR_MENU_KEYS.SEARCH,
      onPress: () => {
        togglePanel(SIDEBAR_MENU_KEYS.SEARCH)
      },
      icon: SearchIcon,
      label: t('navbar.search'),
      component: TriggerItem,
    },
    {
      key: SIDEBAR_MENU_KEYS.EXPLORE,
      route: Routes.EXPLORE,
      icon: CompassIcon,
      label: t('navbar.explore'),
      component: NavItem,
    },
    {
      key: SIDEBAR_MENU_KEYS.REELS,
      route: Routes.REELS.replace('[id]', 123),
      icon: ReelsIcon,
      label: t('navbar.reels'),
      component: NavItem,
    },
    {
      key: SIDEBAR_MENU_KEYS.MESSAGES,
      route: Routes.DIRECT_INBOX,
      icon: MessengerIcon,
      label: t('navbar.messages'),
      component: NavItem,
    },
    {
      key: SIDEBAR_MENU_KEYS.NOTIFICATIONS,
      onPress: () => {
        togglePanel(SIDEBAR_MENU_KEYS.NOTIFICATIONS)
      },
      icon: NotificationsIcon,
      label: t('navbar.notifications'),
      component: TriggerItem,
    },
    {
      key: SIDEBAR_MENU_KEYS.CREATE,
      onPress: () => {
        onOpenUploadPostDialog()
      },
      icon: PlusIcon,
      label: t('navbar.create'),
      component: TriggerItem,
    },
  ]

  const renderItem = (item) => {
    const { component: Component } = item
    const active = getActive(item.key, item.route)

    return (
      <Component
        key={item?.key}
        active={active}
        panelTriggered={panel}
        name={item?.key}
        {...item}
      />
    )
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
