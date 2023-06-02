import NavItem from '../NavItem'
import { Button } from '@/components/base'
import Popover, { PopoverTrigger } from '@/components/base/Popover'
import { FacebookMessengerIcon } from '@/components/icons'
import cn from 'classnames'
import {
  AlertTriangle,
  Bookmark,
  Compass,
  Film,
  Heart,
  History,
  Home,
  Menu,
  PlusSquare,
  Search,
  Settings,
  Sun,
} from 'lucide-react'
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

      <Popover
        trigger={
          <Button
            icon={Menu}
            size="large"
            rootClassName={cn(
              'px-3 gap-x-2 justify-start hover:bg-nav-hover p-3 rounded-lg cursor-pointer transition-all duration-150',
              'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
              'group',
              'radix-state-open:font-bold',
              'radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900',
              'radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50'
            )}
            fullWidth
          >
            More
          </Button>
        }
      >
        <div>
          <NavItem onPress={() => {}} icon={Settings} size="small">
            Settings
          </NavItem>
          <NavItem onPress={() => {}} icon={History} size="small">
            Your Activity
          </NavItem>
          <NavItem onPress={() => {}} icon={Bookmark} size="small">
            Saved
          </NavItem>
          <NavItem onPress={() => {}} icon={Sun} size="small">
            Switch Appearance
          </NavItem>
          <NavItem onPress={() => {}} icon={AlertTriangle} size="small">
            Report a problem
          </NavItem>
          <div className="bg-anti-flash-gray h-[6px] w-auto mx-[-8px] my-2"></div>

          <NavItem onPress={() => {}} size="small">
            Switch account
          </NavItem>
          <div className="bg-anti-flash-gray h-[1px] w-auto mx-[-8px] my-2"></div>
          <NavItem onPress={() => {}} size="small">
            Log out
          </NavItem>
        </div>
      </Popover>
    </div>
  )
}

export default Navigation
