import { Pressable } from '@react-aria/interactions'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { CompassIcon, FacebookMessengerIcon, Film, Home, PlusSquare } from '@/components/icons'
import { Routes } from '@/constants'
import Assets from '@/constants/Assets'
import { SIDEBAR_MENU_KEYS } from '@/constants/Keys'
import { useUploadPostDialog } from '@/hooks/custom'
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

const NavItem = (props) => {
  const router = useRouter()

  const { icon: Icon, content: Content, route, onPress } = props || {}
  const active = checkRouteActive(router, route)

  return (
    <Pressable onPress={() => (route ? router.push(route) : onPress?.())}>
      <div className="flex-1 flex items-center justify-center w-[26px] h-[26px]">
        {Icon && (
          <Icon
            size={active ? 26 : 24}
            className={cn(
              active && Icon !== FacebookMessengerIcon && 'fill-black stroke-white stroke-[1px]'
            )}
          />
        )}
        {Content && <Content active={active} />}
      </div>
    </Pressable>
  )
}

const MobileNavigation = () => {
  const { user } = useAuth()
  const { onOpen } = useUploadPostDialog()

  const NAV_ITEMS = [
    {
      key: SIDEBAR_MENU_KEYS.HOME,
      route: Routes.HOME,
      icon: Home,
      label: 'Home',
    },
    {
      key: SIDEBAR_MENU_KEYS.EXPLORE,
      route: Routes.EXPLORE,
      onPress: () => {
        // TODO: navigate to search page
      },
      icon: CompassIcon,
      label: 'Search',
    },
    {
      key: SIDEBAR_MENU_KEYS.REELS,
      route: `${Routes.REELS}/123`,
      icon: Film,
      label: 'Reels',
    },
    {
      key: SIDEBAR_MENU_KEYS.CREATE,
      onPress: () => onOpen(),
      icon: PlusSquare,
      label: 'Create',
    },
    {
      key: SIDEBAR_MENU_KEYS.MESSAGES,
      route: Routes.DIRECT_INBOX,
      icon: FacebookMessengerIcon,
      label: 'Messages',
    },
    {
      key: SIDEBAR_MENU_KEYS.PROFILE,
      route: Routes.PROFILE.replace('[id]', user?.username),
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
        return <NavItem key={item.key} {...item} />
      })}
    </div>
  )
}

export default MobileNavigation
