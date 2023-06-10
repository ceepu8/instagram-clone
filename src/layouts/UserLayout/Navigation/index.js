import clsx from 'clsx'
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

import MenuPopover from '../MenuPopover'
import NavItem from '../NavItem'

const Navigation = ({ sideBarActive, setSideBarActive }) => {
  const NAV_ITEMS = [
    {
      route: Routes.HOME,
      icon: Home,
      label: 'Home',
    },
    {
      onPress: () => {
        setSideBarActive((prev) => !prev)
      },
      icon: Search,
      label: 'Search',
    },
    {
      route: Routes.EXPLORE,
      icon: Compass,
      label: 'Explore',
    },
    {
      route: `${Routes.REELS}/123`,
      icon: Film,
      label: 'Reels',
    },
    {
      route: Routes.DIRECT_INBOX,
      icon: FacebookMessengerIcon,
      label: 'Messages',
    },
    {
      onPress: () => {
        setSideBarActive((prev) => !prev)
      },
      icon: Heart,
      label: 'Notifications',
    },
    {
      onPress: () => {
        setSideBarActive((prev) => !prev)
      },
      icon: PlusSquare,
      label: 'Create',
    },
    {
      route: `${Routes.PROFILE}/123`,
      label: 'Profile',
      content: (
        <Image
          width={24}
          height={24}
          src="/profile.jpeg"
          alt="profile-image"
          className="rounded-full"
        />
      ),
    },
  ]

  const renderNavItems = () => {
    return (
      <div className="flex-1 space-y-2">
        {NAV_ITEMS.map((item) => {
          return (
            <NavItem
              key={item?.label}
              className={clsx('transition-all duration-150', {
                'max-w-fit': sideBarActive,
              })}
              {...item}
            >
              {item?.content}
              {!sideBarActive && item?.label}
            </NavItem>
          )
        })}
      </div>
    )
  }
  return (
    <div className="flex flex-1 flex-col">
      {renderNavItems()}
      <MenuPopover sideBarActive={sideBarActive} />
    </div>
  )
}

export default Navigation
