import PropTypes from 'prop-types'
import { Fragment } from 'react'

import { LineBreak } from '@/components/base'
import { AlertTriangle, BookmarkIcon, History, SettingsIcon, Sun } from '@/components/icons'
import { POPOVER_MENU_KEYS } from '@/constants/Keys'
import { useLogout } from '@/hooks/query/auth'

import NavItem from '../../NavItem'
import TriggerItem from '../../TriggerItem'

export default function MainMenu({ setMenu }) {
  const handleLogout = useLogout()

  const POPOVER_ITEMS = [
    {
      key: POPOVER_MENU_KEYS.SETTINGS,
      icon: SettingsIcon,
      label: 'Settings',
      route: '/',
      component: NavItem,
    },
    {
      key: POPOVER_MENU_KEYS.YOUR_ACTIVITY,
      icon: History,
      label: 'Your Activity',
      route: '/',
      component: NavItem,
    },
    {
      key: POPOVER_MENU_KEYS.SAVED,
      onPress: null,
      icon: BookmarkIcon,
      label: 'Saved',
      route: '/',
      component: NavItem,
    },
    {
      key: POPOVER_MENU_KEYS.SWITCH_APPEARANCE,
      icon: Sun,
      label: 'Switch Appearance',
      onPress: () => {
        setMenu(POPOVER_MENU_KEYS.SWITCH_APPEARANCE)
      },
      component: TriggerItem,
    },
    {
      key: POPOVER_MENU_KEYS.REPORT_PROBLEM,
      icon: AlertTriangle,
      label: 'Report a problem',
      onPress: null,
      component: TriggerItem,
    },
    {
      key: POPOVER_MENU_KEYS.SWITCH_ACCOUNT,
      icon: null,
      label: 'Switch account',
      onPress: null,
      component: TriggerItem,
    },
    {
      key: POPOVER_MENU_KEYS.LOG_OUT,
      icon: null,
      label: 'Log out',
      onPress: () => handleLogout(),
      component: TriggerItem,
    },
  ]

  const renderItem = (item, index) => {
    const { component: Component } = item
    return (
      <Fragment key={item.key}>
        <Component
          icon={item.icon}
          className="text-sm hover:bg-nav-menu-item"
          iconSize={20}
          name={item.key}
          {...item}
        />
        {index === 4 && <LineBreak className="-mx-2 h-[6px] bg-popover-divide" />}
        {index === 5 && <LineBreak className="-mx-2 bg-popover-divide" />}
      </Fragment>
    )
  }

  return <div className="flex flex-col">{POPOVER_ITEMS.map(renderItem)}</div>
}

MainMenu.propTypes = {
  setMenu: PropTypes.func,
}
