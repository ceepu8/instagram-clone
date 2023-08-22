import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import {
  CompassIcon,
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
    if ([SIDEBAR_MENU_KEYS.SEARCH, SIDEBAR_MENU_KEYS.NOTIFICATIONS].includes(item.key)) {
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
      icon: Home,
      label: t('navbar.home'),
    },
    {
      key: SIDEBAR_MENU_KEYS.SEARCH,
      onPress: () => {
        doSetNavSelected(SIDEBAR_MENU_KEYS.SEARCH)
      },
      icon: Search,
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
      icon: Film,
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
      icon: Heart,
      label: t('navbar.notifications'),
    },
    {
      key: SIDEBAR_MENU_KEYS.CREATE,
      onPress: () => onOpen(),
      icon: PlusSquare,
      label: t('navbar.create'),
    },
    {
      key: SIDEBAR_MENU_KEYS.PROFILE,
      route: Routes.PROFILE.replace('[id]', user?.username),
      label: t('navbar.profile'),
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
          const active = getActive(item)
          const selectedPanel = item.key === navSelected
          return (
            <NavItem
              key={item?.key}
              active={active}
              selectedPanel={selectedPanel}
              name={item?.key}
              {...item}
            >
              {item?.content}
              <span
                className={cn(
                  'hidden lg:block',
                  'transition-all delay-[50ms] duration-[100ms]',
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
    <div className="flex flex-1 flex-col justify-between">
      {renderNavItems()}
      <MenuPopover navSelected={navSelected} />
    </div>
  )
}

export default DesktopNavigation
