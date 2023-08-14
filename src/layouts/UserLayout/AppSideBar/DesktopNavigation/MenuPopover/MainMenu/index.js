import PropTypes from 'prop-types'
import { Fragment } from 'react'

import { LineBreak } from '@/components/base'
import { AlertTriangle, BookmarkIcon, History, SettingsIcon, Sun } from '@/components/icons'
import { POPOVER_MENU_KEYS } from '@/constants/Keys'
import { useLogout } from '@/hooks/query/auth'

import NavItem from '../../NavItem'

export default function MainMenu({ setMenu }) {
  const handleLogout = useLogout()

  const POPOVER_ITEMS = [
    {
      key: POPOVER_MENU_KEYS.SETTINGS,
      onPress: null,
      icon: SettingsIcon,
      label: 'Settings',
    },
    {
      key: POPOVER_MENU_KEYS.YOUR_ACTIVITY,
      onPress: null,
      icon: History,
      label: 'Your Activity',
    },
    {
      key: POPOVER_MENU_KEYS.SAVED,
      onPress: null,
      icon: BookmarkIcon,
      label: 'Saved',
    },
    {
      key: POPOVER_MENU_KEYS.SWITCH_APPEARANCE,
      onPress: () => {
        setMenu(POPOVER_MENU_KEYS.SWITCH_APPEARANCE)
      },
      icon: Sun,
      label: 'Switch Appearance',
    },
    {
      key: POPOVER_MENU_KEYS.REPORT_PROBLEM,
      onPress: null,
      icon: AlertTriangle,
      label: 'Report a problem',
    },
    {
      key: POPOVER_MENU_KEYS.SWITCH_ACCOUNT,
      onPress: () => {},
      label: 'Switch account',
    },
    {
      key: POPOVER_MENU_KEYS.LOG_OUT,
      onPress: () => handleLogout(),
      label: 'Log out',
    },
  ]

  return (
    <div className="flex flex-col">
      {POPOVER_ITEMS.map((item, index) => (
        <Fragment key={item.key}>
          {item.label && (
            <NavItem
              key={item.label}
              onPress={item.onPress}
              icon={item.icon}
              size="small"
              className="hover:bg-nav-menu-item"
            >
              {item.label}
            </NavItem>
          )}
          {index === 4 && <LineBreak className="-mx-2 h-[6px] bg-popover-divide" />}
          {index === 5 && <LineBreak className="-mx-2 bg-popover-divide" />}
        </Fragment>
      ))}
    </div>
  )
}

MainMenu.propTypes = {
  setMenu: PropTypes.func,
}
