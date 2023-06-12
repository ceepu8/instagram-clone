import React from 'react'

import { SlideOutPanel } from '@/components/shared'
import NotificationPanel from '@/components/shared/SlideOutPanel/NotificationsPanel'
import SearchPanel from '@/components/shared/SlideOutPanel/SearchPanel'
import { SIDEBAR_MENU_KEYS } from '@/constants/Keys'

const SlideOutPanelList = ({ navSelected }) => {
  const PANEL_LIST = [
    {
      key: SIDEBAR_MENU_KEYS.SEARCH,
      component: <SearchPanel />,
    },
    {
      key: SIDEBAR_MENU_KEYS.NOTIFICATIONS,
      component: <NotificationPanel />,
    },
  ]
  return (
    <div>
      {PANEL_LIST.map(({ key, component }) => {
        return (
          <SlideOutPanel key={key} isShow={key === navSelected}>
            {component}
          </SlideOutPanel>
        )
      })}
    </div>
  )
}

export default SlideOutPanelList
