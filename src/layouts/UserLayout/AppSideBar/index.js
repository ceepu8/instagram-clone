import { useState } from 'react'

import { Link } from '@/components/base'
import { InstagramIcon, InstagramLetterIcon } from '@/components/icons'
import { cn } from '@/utils'

import Navigation from '../Navigation'

const SideBarLogo = ({ sideBarActive }) => {
  const renderLogo = (
    <InstagramIcon
      width={24}
      height={24}
      className={cn(
        'shrink-0 transition-all duration-300 scale-0 invisible relative top-[40px] left-0',
        {
          'scale-100 visible': sideBarActive,
        }
      )}
    />
  )
  const renderLetterLogo = (
    <InstagramLetterIcon
      width={103}
      height={80}
      className={cn(
        'shrink-0 transition-all duration-300 opacity-100 visible relative top-[-12px] left-0',
        {
          'opacity-0 invisible': sideBarActive,
        }
      )}
    />
  )

  return (
    <div className="max-h-[80px] flex items-center">
      <Link href="/" className={cn('pl-3 text-base')}>
        {renderLogo}
        {renderLetterLogo}
      </Link>
    </div>
  )
}

const AppSideBar = () => {
  const [active, setActive] = useState(true)

  return (
    <div
      className={cn(
        'p-3 flex flex-col h-full max-h-full fixed max-w-[var(--nav-medium-width)] w-full',
        'border-solid border-r-[1.5px] border-divide',
        'transition-all duration-300',
        {
          'max-w-[72px]': active,
        }
      )}
    >
      <SideBarLogo sideBarActive={active} />
      <Navigation sideBarActive={active} setSideBarActive={setActive} />
    </div>
  )
}

export default AppSideBar
