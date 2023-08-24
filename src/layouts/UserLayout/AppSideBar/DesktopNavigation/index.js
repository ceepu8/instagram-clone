import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import {
  CompassIcon,
  FacebookMessengerIcon,
  HomeIcon,
  NotificationsIcon,
  PlusIcon,
  PlusSquare,
  ReelsIcon,
  SearchIcon,
} from '@/components/icons'
import { ProfileAvatar } from '@/components/profile'
import { Routes } from '@/constants'
import { SIDEBAR_MENU_KEYS } from '@/constants/Keys'
import { useUploadPostDialog } from '@/hooks/custom'
import { useAuth } from '@/hooks/query/auth'
import { checkRouteActive, cn } from '@/utils'

import MenuPopover from './MenuPopover'
import NavItem from './NavItem'

const DesktopNavigation = ({ navSelected, setNavSelected }) => {
  const { user } = useAuth()
  const router = useRouter()
  const doSetNavSelected = (key) => setNavSelected((prev) => (prev !== key ? key : ''))
  const { onOpen } = useUploadPostDialog()

  const { t } = useTranslation()

  const getActive = (item) => {
    if (
      [
        SIDEBAR_MENU_KEYS.SEARCH,
        SIDEBAR_MENU_KEYS.NOTIFICATIONS,
        SIDEBAR_MENU_KEYS.CREATE,
      ].includes(item.key)
    ) {
      return item.key === navSelected
    }
    if (!navSelected) {
      return checkRouteActive(router, item.route)
    }
    return false
  }

  const NAV_ITEMS = [
    {
      key: SIDEBAR_MENU_KEYS.HOME,
      route: Routes.HOME,
      icon: HomeIcon,
      label: t('navbar.home'),
    },
    {
      key: SIDEBAR_MENU_KEYS.SEARCH,
      onPress: () => {
        doSetNavSelected(SIDEBAR_MENU_KEYS.SEARCH)
      },
      icon: SearchIcon,
      label: t('navbar.search'),
    },
    {
      key: SIDEBAR_MENU_KEYS.EXPLORE,
      route: Routes.EXPLORE,
      icon: CompassIcon,
      label: t('navbar.explore'),
    },
    {
      key: SIDEBAR_MENU_KEYS.REELS,
      route: Routes.REELS.replace('[id]', 123),
      icon: ReelsIcon,
      label: t('navbar.reels'),
    },
    {
      key: SIDEBAR_MENU_KEYS.MESSAGES,
      route: Routes.DIRECT_INBOX,
      icon: FacebookMessengerIcon,
      label: t('navbar.messages'),
    },
    {
      key: SIDEBAR_MENU_KEYS.NOTIFICATIONS,
      onPress: () => {
        doSetNavSelected(SIDEBAR_MENU_KEYS.NOTIFICATIONS)
      },
      icon: NotificationsIcon,
      label: t('navbar.notifications'),
    },
    {
      key: SIDEBAR_MENU_KEYS.CREATE,
      onPress: () => {
        doSetNavSelected(SIDEBAR_MENU_KEYS.CREATE)
        onOpen()
      },
      icon: PlusIcon,
      label: t('navbar.create'),
    },
    {
      key: SIDEBAR_MENU_KEYS.PROFILE,
      route: Routes.PROFILE.replace('[id]', user?.username),
      label: t('navbar.profile'),
      icon: ProfileAvatar,
    },
  ]

  const renderItem = (item) => {
    const active = getActive(item)
    const selectedPanel = item.key === navSelected && item.key !== 'create'

    return (
      <NavItem
        key={item?.key}
        active={active}
        selectedPanel={selectedPanel}
        navSelected={navSelected}
        name={item?.key}
        {...item}
      />
    )
  }

  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="space-y-2">{NAV_ITEMS.map(renderItem)}</div>
      <MenuPopover navSelected={navSelected} />
    </div>
  )
}

export default DesktopNavigation
