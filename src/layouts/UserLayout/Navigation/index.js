import NavItem from '../NavItem'
import { FacebookMessengerIcon } from '@/components/icons'
import { Compass, Film, Heart, Home, Menu, PlusSquare, Search } from 'lucide-react'
import Image from 'next/image'

const navItems = [
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

const Navigation = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1 space-y-2">
        {navItems.map((e) => {
          const { onPress, route, icon, label, content } = e || {}
          return (
            <NavItem key={label} route={route} onPress={onPress} icon={icon}>
              {label}
              {content}
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
