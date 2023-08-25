import { useRouter } from 'next/router'
import { memo, useMemo } from 'react'

import { Link } from '@/components/base'
import { Routes } from '@/constants'
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
  const router = useRouter()

  const hasActiveBorder = useMemo(() => router.pathname === Routes.PROFILE, [router.pathname])

  const rootClassnames = cn(
    'flex items-center gap-x-4 p-2',
    'text-default',
    'rounded-lg font-medium hover:bg-nav-hover',
    'cursor-pointer transition-all duration-150',
    'border border-solid border-transparent',
    className
  )

  return (
    <Link href={route} disabled={!route} className="block">
      <div className={rootClassnames}>
        <ItemSymbol
          active={active}
          icon={icon}
          iconSize={iconSize}
          hasActiveBorder={hasActiveBorder}
        />
        <ItemLabel isVisible={!panelTriggered} active={active} label={label} />
      </div>
    </Link>
  )
}

export default memo(NavItem)
