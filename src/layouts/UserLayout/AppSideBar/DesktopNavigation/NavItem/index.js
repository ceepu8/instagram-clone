import { Pressable } from '@react-aria/interactions'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { memo, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

import { Routes } from '@/constants'
import { SIDEBAR_MENU_KEYS } from '@/constants/Keys'
import { cn } from '@/utils'

const NavItem = ({
  onPress,
  icon: Icon,
  route,
  selectedPanel,
  className,
  active,
  iconSize = 24,
  label,
  navSelected,
}) => {
  const router = useRouter()

  const isProfile = useMemo(
    () => router.pathname === Routes.PROFILE && !selectedPanel,
    [router.pathname]
  )

  const renderIcon = () => {
    if (!Icon) {
      return null
    }
    return (
      <div
        className={cn(
          'shrink-0 border-[2px]  border-transparent',
          isProfile && active && 'rounded-full border-black'
        )}
      >
        <Icon active={active} size={iconSize} />
      </div>
    )
  }

  return (
    <Pressable onPress={() => (route ? router.push(route) : onPress?.())}>
      <div
        className={twMerge(
          cn(
            'flex items-center gap-x-4 p-2',
            'rounded-lg font-medium hover:bg-nav-hover',
            'cursor-pointer transition-all duration-150',
            'border border-solid border-transparent',
            selectedPanel ? 'max-w-fit border-gainsboro' : '',
            active ? 'font-bold' : '',
            className
          )
        )}
      >
        {renderIcon()}
        <span
          className={cn(
            'hidden transition-all delay-[50ms] duration-[100ms] lg:block',
            [SIDEBAR_MENU_KEYS.SEARCH, SIDEBAR_MENU_KEYS.NOTIFICATIONS].includes(navSelected)
              ? 'invisible opacity-0'
              : 'visible opacity-100'
          )}
        >
          {label}
        </span>
      </div>
    </Pressable>
  )
}

NavItem.propTypes = {
  onPress: PropTypes.func,
  icon: PropTypes.node,
  route: PropTypes.string,
  className: PropTypes.string,
  iconSize: PropTypes.number,
}

export default memo(NavItem)
