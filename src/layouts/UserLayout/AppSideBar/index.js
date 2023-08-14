import { useRef, useState } from 'react'

import { useClickOutside } from '@/hooks/shared'
import { cn } from '@/utils'

import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import SideBarLogo from './SidebarLogo'
import SlideOutPanelList from './SlideOutPanelList'

const AppSideBar = () => {
  const [navSelected, setNavSelected] = useState(null)

  const appSideBarRef = useRef()
  useClickOutside(appSideBarRef, () => setNavSelected(null))

  return (
    <aside ref={appSideBarRef}>
      <div
        className={cn(
          'h-full max-h-screen',
          'fixed z-50 flex-col bg-background p-3',
          'border-r border-solid border-divide',
          'transition-all duration-300',
          'hidden w-0 md:flex',
          navSelected
            ? 'w-[--nav-narrow-width]'
            : 'w-[var(--nav-medium-width)] md:w-[--nav-narrow-width] lg:w-[var(--nav-medium-width)]'
        )}
      >
        <SideBarLogo navSelected={navSelected} />
        <DesktopNavigation navSelected={navSelected} setNavSelected={setNavSelected} />
      </div>
      <SlideOutPanelList navSelected={navSelected} />
      <MobileNavigation />
    </aside>
  )
}

export default AppSideBar
