import { useMemo } from 'react'

import { Link } from '@/components/base'
import { InstagramIcon, InstagramLetterIcon } from '@/components/icons'
import { SCREENS } from '@/constants'
import { useWindowSize } from '@/hooks/shared'
import { cn } from '@/utils'

const SideBarLogo = ({ navSelected }) => {
  const windowSize = useWindowSize()
  const isMediumScreen = useMemo(() => windowSize.width <= SCREENS.LARGE, [windowSize])

  const iconStyle = 'shrink-0 transition-all duration-300 absolute left-3 -translate-y-1/2 top-1/2'

  const renderLogo = (
    <InstagramIcon
      width={24}
      height={24}
      className={cn(
        iconStyle,
        navSelected || isMediumScreen ? 'scale-100 visible' : 'scale-0 invisible'
      )}
    />
  )
  const renderLetterLogo = (
    <InstagramLetterIcon
      width={103}
      height={60}
      className={cn(
        iconStyle,
        !navSelected && !isMediumScreen ? 'opacity-100 visible' : 'opacity-0 invisible'
      )}
    />
  )

  return (
    <div className="min-h-[80px] pl-3 flex items-center relative">
      <Link href="/" className="text-base">
        {renderLogo}
        {renderLetterLogo}
      </Link>
    </div>
  )
}

export default SideBarLogo
