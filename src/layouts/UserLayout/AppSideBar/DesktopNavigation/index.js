import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

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

const DesktopNavigation = ({ panel, togglePanel }) => {
  const { user } = useAuth()
  const router = useRouter()

  const { isOpen: isUploadPostDialogOpen, onOpen: onOpenUploadPostDialog } = useUploadPostDialog()

  const { t } = useTranslation()

  const getActive = (item) => {
    if (panel) {
      return item.key === panel
    }

    if (item.key === SIDEBAR_MENU_KEYS.CREATE) {
      return isUploadPostDialogOpen
    }

    if (item.key !== SIDEBAR_MENU_KEYS.CREATE && isUploadPostDialogOpen) {
      return false
    }

    return checkRouteActive(router, item.route)
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
    {
      key: SIDEBAR_MENU_KEYS.PROFILE,
      route: Routes.PROFILE.replace('[username]', user?.username),
      label: t('navbar.profile'),
      icon: ProfileAvatar,
      component: NavItem,
    },
  ]

  const renderItem = (item) => {
    const { component: Component } = item
    const active = getActive(item)

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
    <div className="flex flex-1 flex-col justify-between">
      <div className="space-y-2">{NAV_ITEMS.map(renderItem)}</div>
      <MenuPopover panel={panel} />
    </div>
  )
}

export default DesktopNavigation
