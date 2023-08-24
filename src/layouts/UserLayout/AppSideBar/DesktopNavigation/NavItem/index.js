import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo, useMemo } from 'react'

import { Routes } from '@/constants'
import { cn } from '@/utils'

import ItemLabel from '../components/ItemLabel'
import ItemSymbol from '../components/ItemSymbol'

const NavItem = ({
  icon,
  route,
  selectedPanel,
  className,
  active,
  label,
  iconSize,
  panelTriggered,
}) => {
  const router = useRouter()

  const hasActiveBorder = useMemo(
    () => router.pathname === Routes.PROFILE && !selectedPanel,
    [router.pathname]
  )

  const rootClassnames = cn(
    'flex items-center gap-x-4 p-2',
    'text-default',
    'rounded-lg font-medium hover:bg-nav-hover',
    'cursor-pointer transition-all duration-150',
    'border border-solid border-transparent',
    className
  )

  return (
    <Link href={route} className="block">
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
