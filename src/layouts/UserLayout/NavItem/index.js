import { Pressable } from '@react-aria/interactions'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { memo } from 'react'
import { twMerge } from 'tailwind-merge'

import { checkRouteActive } from '@/utils'

const NavItem = ({ onPress, children, icon: Icon, route, size = 'medium', className }) => {
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
            'flex items-center gap-x-4 hover:bg-nav-hover font-medium p-3 rounded-lg cursor-pointer transition-all duration-150',
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

export default memo(NavItem)
