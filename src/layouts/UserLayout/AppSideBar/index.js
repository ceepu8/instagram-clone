import { useRef, useState } from 'react'

import { useClickOutside } from '@/hooks/shared'
import { cn } from '@/utils'

import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import SideBarLogo from './SidebarLogo'
import SlideOutPanelList from './SlideOutPanelList'

const AppSideBar = () => {
  const [panel, setOpenPanel] = useState(null)

  const togglePanel = (newPanel) => {
    setOpenPanel((oldPanel) => {
      const closePanel = oldPanel === newPanel
      if (closePanel) {
        return null
      }
      return newPanel
    })
  }

  const appSideBarRef = useRef()

  useClickOutside(appSideBarRef, () => setOpenPanel(null))

  return (
    <aside ref={appSideBarRef}>
      <div
        className={cn(
          'h-full max-h-screen',
          'fixed z-50 flex-col bg-background p-3',
          'border-r border-solid border-divide',
          'transition-[width] duration-300',
          'hidden w-0 md:flex',
          panel
            ? 'w-[--nav-narrow-width]'
            : 'w-[var(--nav-medium-width)] md:w-[--nav-narrow-width] lg:w-[var(--nav-medium-width)]'
        )}
      >
        <SideBarLogo panel={panel} />
        <DesktopNavigation panel={panel} togglePanel={togglePanel} />
      </div>
      <SlideOutPanelList panel={panel} />
      <MobileNavigation />
    </aside>
  )
}

export default AppSideBar
