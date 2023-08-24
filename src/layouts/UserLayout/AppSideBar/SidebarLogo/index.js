import { useMemo } from 'react'

import { Link } from '@/components/base'
import { InstagramIcon, InstagramLetterIcon } from '@/components/icons'
import { SCREENS } from '@/constants'
import { useWindowSize } from '@/hooks/shared'
import { cn } from '@/utils'

const SideBarLogo = ({ panel }) => {
  const windowSize = useWindowSize()
  const isMediumScreen = useMemo(() => windowSize.width <= SCREENS.LARGE, [windowSize])

  const iconStyle = 'shrink-0 transition-all duration-300 absolute left-3 -translate-y-1/2 top-1/2'

  const renderLogo = (
    <InstagramIcon
      width={24}
      height={24}
      className={cn(iconStyle, panel || isMediumScreen ? 'visible scale-100' : 'invisible scale-0')}
    />
  )
  const renderLetterLogo = (
    <InstagramLetterIcon
      width={103}
      height={60}
      className={cn(
        iconStyle,
        !panel && !isMediumScreen ? 'visible opacity-100' : 'invisible opacity-0'
      )}
    />
  )

  return (
    <div className="relative flex min-h-[80px] items-center pl-3">
      <Link href="/" className="text-default">
        {renderLogo}
        {renderLetterLogo}
      </Link>
    </div>
  )
}

export default SideBarLogo
