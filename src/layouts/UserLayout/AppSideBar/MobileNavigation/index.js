import { Pressable } from '@react-aria/interactions'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { FacebookMessengerIcon, Film, Home, Search } from '@/components/icons'
import { Routes } from '@/constants'
import Assets from '@/constants/Assets'
import { SIDEBAR_MENU_KEYS } from '@/constants/Keys'
import { useAuth } from '@/hooks/query/auth'
import { checkRouteActive, cn } from '@/utils'

const ProfileImage = ({ size = 24, className, active }) => {
  const { user } = useAuth()

  return (
    <div className={cn('shrink-0', className)}>
      <Image
        width={size}
        height={size}
        src={user?.image || Assets.COMMON.PLACEHOLDER}
        alt="profile-image"
        className={cn('rounded-full border-2', active ? 'border-base' : 'border-transparent')}
      />
    </div>
  )
}

const MobileNavigation = () => {
  const { user } = useAuth()
  const router = useRouter()

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
        // doSetNavSelected(SIDEBAR_MENU_KEYS.SEARCH)
      },
      icon: Search,
      label: 'Search',
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
      key: SIDEBAR_MENU_KEYS.PROFILE,
      route: `${Routes.PROFILE}/${user?.id}?tab=posts`,
      label: 'Profile',
      content: ProfileImage,
    },
  ]

  return (
    <div
      className={cn(
        'w-full bg-background py-3 px-6',
        'z-50 fixed bottom-0 left-0',
        'flex items-center justify-between',
        'border-t border-divide',
        'md:hidden'
      )}
    >
      {NAV_ITEMS.map((item) => {
        const { icon: Icon, key, content: Content, route, onPress } = item || {}
        const active = checkRouteActive(router, route)
        return (
          <Pressable key={key} onPress={() => (route ? router.push(route) : onPress?.())}>
            <div className="flex-1 flex items-center justify-center w-[26px] h-[26px]">
              {Icon && (
                <Icon
                  size={active ? 26 : 24}
                  className={cn(
                    active &&
                      Icon !== FacebookMessengerIcon &&
                      'fill-black stroke-white stroke-[1px]'
                  )}
                />
              )}
              {Content && <Content active={active} />}
            </div>
          </Pressable>
        )
      })}
    </div>
  )
}

export default MobileNavigation
