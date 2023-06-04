import { checkRouteActive } from '@/utils'
import { Pressable } from '@react-aria/interactions'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { memo } from 'react'
import { twMerge } from 'tailwind-merge'

const NavItem = ({
  onPress,
  children,
  icon: Icon,
  route,
  size = 'medium',
  className,
  ...props
}) => {
  const router = useRouter()
  const active = checkRouteActive(router, route)

  const _size = {
    icon: size === 'medium' ? '30px' : '20px',
    letter: size === 'medium' ? 'text-lg' : '',
  }

  return (
    <Pressable onPress={() => (route ? router.push(route) : onPress?.())}>
      <div
        className={twMerge(
          cn(
            'flex items-center gap-x-4 hover:bg-nav-hover font-medium p-4 rounded-lg cursor-pointer transition-all duration-150',
            active ? 'font-bold' : '',
            _size.letter,
            className
          )
        )}
      >
        {Icon && <Icon width={_size.icon} height={_size.icon} />}
        {children}
      </div>
    </Pressable>
  )
}

export default memo(NavItem)
