import NavItem from '../NavItem'
import { LineBreak } from '@/components/base'
import { Settings, AlertTriangle, Bookmark, History, Sun } from '@/components/icons'
import { POPOVER_MENU_KEYS } from '@/constants/Keys'
import PropTypes from 'prop-types'
import { Fragment } from 'react'

export default function MainMenu(props) {
  const { setMenu } = props || {}

  const POPOVER_ITEMS = [
    {
      key: POPOVER_MENU_KEYS.SETTINGS,
      onPress: () => {},
      icon: Settings,
      label: 'Settings',
    },
    {
      key: POPOVER_MENU_KEYS.YOUR_ACTIVITY,
      onPress: () => {},
      icon: History,
      label: 'Your Activity',
    },
    {
      key: POPOVER_MENU_KEYS.SAVED,
      onPress: () => {},
      icon: Bookmark,
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
      onPress: () => {},
      icon: AlertTriangle,
      label: 'Report a problem',
    },
    {
      key: POPOVER_MENU_KEYS.SWITCH_ACCOUNT,
      label: 'Switch account',
    },
    {
      key: POPOVER_MENU_KEYS.LOG_OUT,
      label: 'Log out',
    },
  ]

  return (
    <div className="flex flex-col">
      {POPOVER_ITEMS.map((item, index) => (
        <Fragment key={item.key}>
          {item.label && (
            <NavItem
              onPress={item.onPress}
              icon={item.icon}
              size="small"
              className="hover:bg-nav-menu-item"
            >
              {item.label}
            </NavItem>
          )}
          {index === 4 && <LineBreak className="bg-popover-divide h-[6px]" />}
          {index === 5 && <LineBreak className="bg-popover-divide" />}
        </Fragment>
      ))}
    </div>
  )
}

MainMenu.propTypes = {
  setMenu: PropTypes.func,
}
