import { memo } from 'react'

import { Link } from '@/components/base'
import { cn } from '@/utils'

import ItemLabel from '../components/ItemLabel'
import ItemSymbol from '../components/ItemSymbol'

const NavItem = ({
  icon,
  route,
  className,
  active = false,
  label,
  iconSize,
  panelTriggered = false,
}) => {
  const rootClassnames = cn(
    'rounded-lg font-medium hover:bg-nav-hover',
    'cursor-pointer transition-[background] duration-150',
    'border border-solid border-transparent',
    className
  )

  return (
    <li className={rootClassnames}>
      <Link href={route} disabled={!route}>
        <div className="flex items-center gap-x-4 p-2 text-default">
          <ItemSymbol active={active} icon={icon} iconSize={iconSize} />
          <ItemLabel isVisible={!panelTriggered} active={active} label={label} />
        </div>
      </Link>
    </li>
  )
}

export default memo(NavItem)
