import { useRef, useState } from 'react'

import { useClickOutside } from '@/hooks'
import { cn } from '@/utils'

import Navigation from '../Navigation'
import SlideOutPanelList from '../SlideOutPanelList'
import SideBarLogo from './SideBarLogo'

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
          navSelected ? 'w-[--nav-narrow-width]' : 'w-[var(--nav-medium-width)]'
        )}
      >
        <SideBarLogo navSelected={navSelected} />
        <Navigation navSelected={navSelected} setNavSelected={setNavSelected} />
      </div>
      <SlideOutPanelList navSelected={navSelected} />
    </div>
  )
}

export default AppSideBar
