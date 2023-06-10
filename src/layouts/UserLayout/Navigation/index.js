import Image from 'next/image'
import { useState } from 'react'

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
import { cn } from '@/utils'

import MenuPopover from '../MenuPopover'
import NavItem from '../NavItem'

const Navigation = ({ sideBarActive, setSideBarActive }) => {
  const [navSelected, setNavSelected] = useState('')
  const NAV_ITEMS = [
    {
      key: 'home',
      route: Routes.HOME,
      icon: Home,
      label: 'Home',
    },
    {
      key: 'search',
      onPress: () => {
        setSideBarActive((prev) => !prev)
        setNavSelected('search')
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
      key: 'notifications',
      onPress: () => {
        setSideBarActive((prev) => !prev)
        setNavSelected('notifications')
      },
      icon: Heart,
      label: 'Notifications',
    },
    {
      key: 'create',
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
          const isNavSelected = item.key === navSelected
          return (
            <NavItem
              key={item?.key}
              className={cn(
                'transition-all duration-150 border-solid border-[1px] border-transparent',
                {
                  'max-w-fit border-base': sideBarActive && isNavSelected,
                }
              )}
              {...item}
            >
              {item?.content}
              <span
                className={cn('visible opacity-100 duration-150 delay-[125ms] transition-all', {
                  'invisible opacity-0': sideBarActive,
                })}
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
    <div className="flex flex-1 flex-col">
      {renderNavItems()}
      <MenuPopover sideBarActive={sideBarActive} />
    </div>
  )
}

export default Navigation
