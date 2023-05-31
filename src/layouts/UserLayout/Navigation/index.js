import NavItem from '../NavItem'
import { FacebookMessengerIcon } from '@/components/icons'
import { Compass, Film, Heart, Home, Menu, PlusSquare, Search } from 'lucide-react'
import Image from 'next/image'

const Navigation = () => {
  const NAV_ITEMS = [
    {
      route: '/',
      icon: Home,
      label: 'Home',
    },
    {
      onPress: () => {},
      icon: Search,
      label: 'Search',
    },
    {
      route: '/explore',
      icon: Compass,
      label: 'Explore',
    },
    {
      route: '/reels/123',
      icon: Film,
      label: 'Reels',
    },
    {
      route: '/direct/inbox',
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
      route: '/profile/123',
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
  return (
    <div className="flex flex-1 flex-col">
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
      <NavItem onPress={() => {}} icon={Menu}>
        More
      </NavItem>
    </div>
  )
}

export default Navigation
