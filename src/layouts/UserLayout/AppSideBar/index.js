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
    <div ref={appSideBarRef}>
      <div
        className={cn(
          'p-3 flex flex-col h-full fixed z-50 bg-background',
          'border-solid border-r border-divide',
          'transition-all duration-300',
          'hidden md:block w-0',
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
    </div>
  )
}

export default AppSideBar
