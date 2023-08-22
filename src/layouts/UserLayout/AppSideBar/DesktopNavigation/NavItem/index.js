import { Pressable } from '@react-aria/interactions'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { memo } from 'react'
import { twMerge } from 'tailwind-merge'

import { cn } from '@/utils'

const NavItem = ({
  onPress,
  children,
  icon: Icon,
  route,
  size = 'medium',
  selectedPanel,
  className,
  active,
}) => {
  const router = useRouter()

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
            selectedPanel ? 'max-w-fit border-default' : '',
            active ? 'font-bold' : '',
            _size.letter,
            className
          )
        )}
      >
        {Icon && (
          <div className="shrink-0">
            <Icon
              active={active}
              width={_size.icon}
              height={_size.icon}
              className={cn(
                'shrink-0 stroke-black stroke-[2px]',
                active ? 'fill-black' : 'fill-white '
              )}
            />
          </div>
        )}
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
}

export default memo(NavItem)
