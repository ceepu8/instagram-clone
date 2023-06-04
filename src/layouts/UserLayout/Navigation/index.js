import MenuPopover from '../MenuPopover'
import NavItem from '../NavItem'
import { FacebookMessengerIcon } from '@/components/icons'
import { ROUTES } from '@/constants'
import { Compass, Film, Heart, Home, PlusSquare, Search } from 'lucide-react'
import Image from 'next/image'

const Navigation = () => {
  const NAV_ITEMS = [
    {
      route: ROUTES.HOME,
      icon: Home,
      label: 'Home',
    },
    {
      onPress: () => {},
      icon: Search,
      label: 'Search',
    },
    {
      route: ROUTES.EXPLORE,
      icon: Compass,
      label: 'Explore',
    },
    {
      route: ROUTES.REELS + '/123',
      icon: Film,
      label: 'Reels',
    },
    {
      route: ROUTES.DIRECT_INBOX,
      icon: FacebookMessengerIcon,
      label: 'Messages',
    },
    {
      onPress: () => {},
      icon: Heart,
      label: 'Notifications',
    },
    {
      onPress: () => {},
      icon: PlusSquare,
      label: 'Create',
    },
    {
      route: ROUTES.PROFILE + '/123',
      content: (
        <>
          <Image
            width={30}
            height={30}
            src="/profile.jpeg"
            alt="profile-image"
            className="rounded-full"
          />
          <span>Profile</span>
        </>
      ),
    },
  ]

  const renderNavItems = () => {
    return (
      <div className="flex-1 space-y-2">
        {NAV_ITEMS.map((item) => {
          return (
            <NavItem key={item?.label} {...item}>
              {item?.label}
              {item?.content}
            </NavItem>
          )
        })}
      </div>
    )
  }
  return (
    <div className="flex flex-1 flex-col">
      {renderNavItems()}
      <MenuPopover />
    </div>
  )
}

export default Navigation
