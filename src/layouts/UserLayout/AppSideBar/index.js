import { useState } from 'react'

import { Link } from '@/components/base'
import { InstagramIcon, InstagramLetterIcon } from '@/components/icons'
import { cn } from '@/utils'

import Navigation from '../Navigation'

const SideBarLogo = ({ navSelected }) => {
  const iconStyle = 'shrink-0 transition-all duration-300 absolute left-3 -translate-y-1/2 top-1/2'

  const renderLogo = (
    <InstagramIcon
      width={24}
      height={24}
      className={cn(iconStyle, 'scale-0 invisible', {
        'scale-100 visible': navSelected,
      })}
    />
  )
  const renderLetterLogo = (
    <InstagramLetterIcon
      width={103}
      height={60}
      className={cn(iconStyle, 'opacity-0 invisible', {
        'opacity-100 visible': !navSelected,
      })}
    />
  )

  return (
    <div className="min-h-[80px] pl-3 flex items-center relative">
      <Link href="/" className={cn('text-base')}>
        {renderLogo}
        {renderLetterLogo}
      </Link>
    </div>
  )
}

const AppSideBar = () => {
  const [navSelected, setNavSelected] = useState('')

  return (
    <div
      className={cn(
        'p-3 flex flex-col h-full fixed w-[var(--nav-medium-width)]',
        'border-solid border-r-[1.5px] border-divide',
        'transition-all duration-300',
        {
          'w-[--nav-narrow-width]': navSelected,
        }
      )}
    >
      <SideBarLogo navSelected={navSelected} />
      <Navigation navSelected={navSelected} setNavSelected={setNavSelected} />
    </div>
  )
}

export default AppSideBar
