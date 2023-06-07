import NavItem from '../NavItem'
import { LineBreak } from '@/components/base'
import { Settings, AlertTriangle, Bookmark, History, Sun } from '@/components/icons'
import { POPOVER_MENU_KEYS } from '@/constants/Keys'
import propTypes from 'prop-types'
import { Fragment } from 'react'

export default function MainMenu(props) {
  const { setMenu } = props || {}

  const POPOVER_ITEMS = [
    {
      key: POPOVER_MENU_KEYS.SETTINGS_KEY,
      onPress: () => {},
      icon: Settings,
      label: 'Settings',
    },
    {
      key: POPOVER_MENU_KEYS.YOUR_ACTIVITY_KEY,
      onPress: () => {},
      icon: History,
      label: 'Your Activity',
    },
    {
      key: POPOVER_MENU_KEYS.SAVED_KEY,
      onPress: () => {},
      icon: Bookmark,
      label: 'Saved',
    },
    {
      key: POPOVER_MENU_KEYS.SWITCH_APPEARANCE_KEY,
      onPress: () => {
        setMenu(POPOVER_MENU_KEYS.SWITCH_APPEARANCE_KEY)
      },
      icon: Sun,
      label: 'Switch Appearance',
    },
    {
      key: POPOVER_MENU_KEYS.REPORT_PROBLEM_KEY,
      onPress: () => {},
      icon: AlertTriangle,
      label: 'Report a problem',
    },
    {
      key: POPOVER_MENU_KEYS.SWITCH_ACCOUNT_KEY,
      label: 'Switch account',
    },
    {
      key: POPOVER_MENU_KEYS.LOG_OUT_KEY,
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
          {index === 4 && <LineBreak className="bg-popover-divide h-[6px] -mx-2" />}
          {index === 5 && <LineBreak className="bg-popover-divide -mx-2" />}
        </Fragment>
      ))}
    </div>
  )
}

MainMenu.propTypes = {
  setMenu: propTypes.func,
}
