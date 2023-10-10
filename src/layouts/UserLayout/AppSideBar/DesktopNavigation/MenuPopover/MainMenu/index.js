import { Pressable } from '@react-aria/interactions'
import PropTypes from 'prop-types'
import { Fragment } from 'react'

import { LineBreak, Link } from '@/components/base'
import { AlertTriangle, BookmarkIcon, History, SettingsIcon, Sun } from '@/components/icons'
import { Routes } from '@/constants'
import { POPOVER_MENU_KEYS } from '@/constants/Keys'
import { useAuth, useLogout } from '@/hooks/query/auth'

const MenuNavItem = ({ item, children }) => {
  const { route } = item

  return (
    <Link href={route} disabled={!route}>
      {children}
    </Link>
  )
}

const MenuTriggerItem = ({ item, children }) => {
  const { onPress } = item

  return <Pressable onPress={onPress}>{children}</Pressable>
}

export default function MainMenu({ setMenu }) {
  const { user } = useAuth()
  const handleLogout = useLogout()

  const POPOVER_ITEMS = [
    {
      key: POPOVER_MENU_KEYS.SETTINGS,
      icon: SettingsIcon,
      label: 'Settings',
      route: Routes.ACCOUNT_EDIT,
      component: MenuNavItem,
    },
    {
      key: POPOVER_MENU_KEYS.YOUR_ACTIVITY,
      icon: History,
      label: 'Your Activity',
      route: '/',
      component: MenuNavItem,
    },
    {
      key: POPOVER_MENU_KEYS.SAVED,
      icon: BookmarkIcon,
      label: 'Saved',
      route: `${Routes.PROFILE.replace('[username]', user?.username)}?tab=saved`,
      component: MenuNavItem,
    },
    {
      key: POPOVER_MENU_KEYS.SWITCH_APPEARANCE,
      icon: Sun,
      label: 'Switch Appearance',
      onPress: () => setMenu(POPOVER_MENU_KEYS.SWITCH_APPEARANCE),
      component: MenuTriggerItem,
    },
    {
      key: POPOVER_MENU_KEYS.REPORT_PROBLEM,
      icon: AlertTriangle,
      label: 'Report a problem',
      onPress: () => {},
      component: MenuTriggerItem,
    },
    {
      key: POPOVER_MENU_KEYS.SWITCH_ACCOUNT,
      icon: null,
      label: 'Switch account',
      onPress: () => {},
      component: MenuTriggerItem,
    },
    {
      key: POPOVER_MENU_KEYS.LOG_OUT,
      icon: null,
      label: 'Log out',
      onPress: () => handleLogout(),
      component: MenuTriggerItem,
    },
  ]

  const renderItem = (item, index) => {
    const { component: Component, label, key, icon: Icon } = item
    return (
      <Fragment key={key}>
        <li className="cursor-pointer rounded-lg border border-solid border-transparent text-sm font-medium transition-all duration-150 hover:bg-nav-menu-item">
          <Component item={item}>
            <div className="flex items-center gap-x-4 p-2 text-default">
              {Icon && (
                <div className="shrink-0 border-[2px] border-transparent">
                  <Icon />
                </div>
              )}
              <span>{label}</span>
            </div>
          </Component>
        </li>
        {index === 4 && <LineBreak className="-mx-2 h-[6px] bg-popover-divide" />}
        {index === 5 && <LineBreak className="-mx-2 bg-popover-divide" />}
      </Fragment>
    )
  }

  return <ul className="flex flex-col">{POPOVER_ITEMS.map(renderItem)}</ul>
}

MainMenu.propTypes = {
  setMenu: PropTypes.func,
}
