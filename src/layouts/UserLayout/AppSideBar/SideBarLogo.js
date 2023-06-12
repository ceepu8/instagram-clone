import { Link } from '@/components/base'
import { InstagramIcon, InstagramLetterIcon } from '@/components/icons'
import { cn } from '@/utils'

const SideBarLogo = ({ navSelected }) => {
  const iconStyle = 'shrink-0 transition-all duration-300 absolute left-3 -translate-y-1/2 top-1/2'

  const renderLogo = (
    <InstagramIcon
      width={24}
      height={24}
      className={cn(iconStyle, navSelected ? 'scale-100 visible' : 'scale-0 invisible')}
    />
  )
  const renderLetterLogo = (
    <InstagramLetterIcon
      width={103}
      height={60}
      className={cn(iconStyle, !navSelected ? 'opacity-100 visible' : 'opacity-0 invisible')}
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

export default SideBarLogo
