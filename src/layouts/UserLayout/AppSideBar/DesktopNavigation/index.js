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
import { cn } from '@/utils'

import MenuPopover from './MenuPopover'
import NavItem from './NavItem'

const DesktopNavigation = ({ navSelected, setNavSelected }) => {
  const { user } = useAuth()
  const doSetNavSelected = (key) => setNavSelected((prev) => (prev !== key ? key : ''))
  const { onOpen } = useUploadPostDialog()

  const { t } = useTranslation()

  const router = useRouter()

  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  const changeTo = router.locale === 'en' ? 'vi' : 'en'

  const NAV_ITEMS = [
    {
      key: SIDEBAR_MENU_KEYS.HOME,
      route: Routes.HOME,
      icon: Home,
      label: t('home'),
    },
    {
      key: SIDEBAR_MENU_KEYS.SEARCH,
      onPress: () => {
        doSetNavSelected(SIDEBAR_MENU_KEYS.SEARCH)
      },
      icon: Search,
      label: t('search'),
    },
    {
      key: SIDEBAR_MENU_KEYS.EXPLORE,
      route: Routes.EXPLORE,
      icon: CompassIcon,
      label: t('explore'),
    },
    {
      key: SIDEBAR_MENU_KEYS.REELS,
      route: Routes.REELS.replace('[id]', 123),
      icon: Film,
      label: t('reels'),
    },
    {
      key: SIDEBAR_MENU_KEYS.MESSAGES,
      route: Routes.DIRECT_INBOX,
      icon: FacebookMessengerIcon,
      label: t('messages'),
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
      label: t('create'),
    },
    {
      key: SIDEBAR_MENU_KEYS.PROFILE,
      route: Routes.PROFILE.replace('[id]', user?.username),
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
                  'transition-all delay-[50ms] duration-[100ms]',
                  navSelected ? 'invisible opacity-0' : 'visible opacity-100'
                )}
              >
                {item?.label}
              </span>
            </NavItem>
          )
        })}
        <button type="button" onClick={() => onToggleLanguageClick(changeTo)}>
          {t('change-locale', { changeTo })}
        </button>
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
