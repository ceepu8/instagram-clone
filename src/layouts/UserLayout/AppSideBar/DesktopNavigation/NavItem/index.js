import { Pressable } from '@react-aria/interactions'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { memo } from 'react'
import { twMerge } from 'tailwind-merge'

import { checkRouteActive, cn } from '@/utils'

const NavItem = ({
  onPress,
  children,
  icon: Icon,
  route,
  size = 'medium',
  className,
  isSelecting = false,
}) => {
  const router = useRouter()
  const active = checkRouteActive(router, route)

  const _size = {
    icon: size === 'medium' ? '24px' : '20px',
    letter: size === 'medium' ? 'text-md' : 'text-sm',
  }

  return (
    <Pressable onPress={() => (route ? router.push(route) : onPress?.())}>
      <div
        className={twMerge(
          cn(
            'flex items-center gap-x-4 p-3',
            'rounded-lg font-medium hover:bg-nav-hover',
            'cursor-pointer transition-all duration-150',
            'border border-solid border-transparent',
            isSelecting ? 'max-w-fit border-base' : '',
            active ? 'font-bold' : '',
            _size.letter,
            className
          )
        )}
      >
        {Icon && <Icon width={_size.icon} height={_size.icon} className="shrink-0" />}
        {children}
      </div>
    </Pressable>
  )
}

NavItem.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.node,
  route: PropTypes.string,
  size: PropTypes.oneOf('medium', 'small'),
  className: PropTypes.string,
  isSelecting: PropTypes.bool,
}

export default memo(NavItem)
