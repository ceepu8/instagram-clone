import Image from 'next/image'

import {
  CompassIcon,
  FacebookMessengerIcon,
  ReelsIcon,
  HomeIcon,
  PlusSquare,
  PlusIcon,
} from '@/components/icons'
import { Routes } from '@/constants'
import Assets from '@/constants/Assets'
import { SIDEBAR_MENU_KEYS } from '@/constants/Keys'
import { useUploadPostDialog } from '@/hooks/custom'
import { useAuth } from '@/hooks/query/auth'
import { cn } from '@/utils'

import NavItem from './NavItem'

const ProfileImage = ({ size = 24, className, active }) => {
  const { user } = useAuth()

  return (
    <div className={cn('shrink-0', className)}>
      <Image
        width={size}
        height={size}
        src={user?.image || Assets.COMMON.PLACEHOLDER}
        alt="profile-image"
        className={cn('rounded-full border-2', active ? 'border-default' : 'border-transparent')}
      />
    </div>
  )
}

const MobileNavigation = () => {
  const { user } = useAuth()
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
      onPress: () => {
        // TODO: navigate to search page
      },
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
        'w-full bg-background px-6 py-3',
        'fixed bottom-0 left-0 z-50',
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
