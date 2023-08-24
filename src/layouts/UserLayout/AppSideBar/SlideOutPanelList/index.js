import { SlideOutPanel } from '@/components/shared'
import NotificationPanel from '@/components/shared/SlideOutPanel/NotificationsPanel'
import SearchPanel from '@/components/shared/SlideOutPanel/SearchPanel'
import { SIDEBAR_MENU_KEYS } from '@/constants/Keys'

const SlideOutPanelList = ({ panel }) => {
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
    <>
      {PANEL_LIST.map(({ key, component }) => {
        return (
          <SlideOutPanel key={key} isShow={key === panel}>
            {component}
          </SlideOutPanel>
        )
      })}
    </>
  )
}

export default SlideOutPanelList
