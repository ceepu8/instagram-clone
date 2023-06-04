import NavItem from '../NavItem'
import { LineBreak } from '@/components/base'
import {
  LOG_OUT_KEY,
  REPORT_PROBLEM_KEY,
  SAVED_KEY,
  SETTINGS_KEY,
  SWITCH_ACCOUNT_KEY,
  SWITCH_APPEARANCE_KEY,
  YOUR_ACTIVITY_KEY,
} from '@/constants'
import { AlertTriangle, Bookmark, History, Settings, Sun } from 'lucide-react'
import propTypes from 'prop-types'
import { Fragment } from 'react'

export default function MainMenu(props) {
  const { setMenu } = props || {}

  const POPOVER_ITEMS = [
    {
      key: SETTINGS_KEY,
      onPress: () => {},
      icon: Settings,
      label: 'Settings',
    },
    {
      key: YOUR_ACTIVITY_KEY,
      onPress: () => {},
      icon: History,
      label: 'Your Activity',
    },
    {
      key: SAVED_KEY,
      onPress: () => {},
      icon: Bookmark,
      label: 'Saved',
    },
    {
      key: SWITCH_APPEARANCE_KEY,
      onPress: () => {
        setMenu(SWITCH_APPEARANCE_KEY)
      },
      icon: Sun,
      label: 'Switch Appearance',
    },
    {
      key: REPORT_PROBLEM_KEY,
      onPress: () => {},
      icon: AlertTriangle,
      label: 'Report a problem',
    },
    {
      key: SWITCH_ACCOUNT_KEY,
      label: 'Switch account',
    },
    {
      key: LOG_OUT_KEY,
      label: 'Log out',
    },
  ]

  return (
    <div>
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
  setMenu: propTypes.func,
}
