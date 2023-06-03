import NavItem from '../NavItem'
import { Button } from '@/components/base'
import Popover, { PopoverTrigger } from '@/components/base/Popover'
import { FacebookMessengerIcon } from '@/components/icons'
import { Switch } from '@/components/shared'
import { Pressable } from '@react-aria/interactions'
import cn from 'classnames'
import {
  AlertTriangle,
  Bookmark,
  ChevronLeft,
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
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useState } from 'react'

const PopoverContent = () => {
  const [isMainMenu, setMainMenu] = useState(true)
  const { theme, setTheme } = useTheme()

  const renderMainMenuContent = () => {
    return (
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

        <NavItem onPress={() => setMainMenu(false)} icon={Sun} size="small">
          Switch Appearance
        </NavItem>

        <NavItem onPress={() => {}} icon={AlertTriangle} size="small">
          Report a problem
        </NavItem>
        <div className="bg-popover-divide h-[6px] w-auto mx-[-8px] my-2"></div>

        <NavItem onPress={() => {}} size="small">
          Switch account
        </NavItem>
        <div className="bg-popover-divide h-[1px] w-auto mx-[-8px] my-2"></div>
        <NavItem onPress={() => {}} size="small">
          Log out
        </NavItem>
      </div>
    )
  }

  const renderSwitchAppearanceContent = () => {
    const onToggle = (checked) => {
      const _theme = checked ? 'dark' : 'light'
      setTheme(_theme)
    }

    return (
      <div>
        <div className="flex items-center">
          <Button
            variant="text-secondary"
            icon={ChevronLeft}
            size="small"
            onClick={() => setMainMenu(true)}
          />
          <h1 className="text-lg font-semibold">Switch Appearance</h1>
        </div>
        <div className="bg-popover-divide h-[1px] w-auto -mx-2 my-2"></div>
        <Pressable onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <div className="p-4 hover:bg-nav-hover rounded-lg cursor-pointer">
            <Switch
              label="Dark mode"
              checked={theme === 'dark'}
              onChange={onToggle}
              labelStyle="text-base"
              rootStyle="ml-auto w-[30px] h-[18px]"
              thumbStyle="w-[15px] h-[14.9px] group-radix-state-checked:translate-x-3"
            />
          </div>
        </Pressable>
      </div>
    )
  }

  return (
    <div className="transition-all durantion-150">
      {isMainMenu ? renderMainMenuContent() : renderSwitchAppearanceContent()}
    </div>
  )
}

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
        clicked
        trigger={
          <Button
            icon={Menu}
            size="large"
            rootClassName={cn(
              'px-3 gap-x-2 justify-start hover:bg-nav-hover p-3 rounded-lg cursor-pointer',
              'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
              'group',
              'radix-state-open:font-bold',
              'radix-state-on:bg-vivid-cerulean dark:radix-state-on:bg-gray-900',
              'radix-state-instant-open:bg-vivid-cerulean radix-state-delayed-open:bg-gray-50'
            )}
            fullWidth
          >
            More
          </Button>
        }
      >
        <PopoverContent />
      </Popover>
    </div>
  )
}

export default Navigation
