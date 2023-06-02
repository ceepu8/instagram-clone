import { checkRouteActive } from '@/utils'
import { Pressable } from '@react-aria/interactions'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { memo } from 'react'

const NavItem = ({ onPress, children, icon: Icon, route, size = 'medium' }) => {
  const router = useRouter()
  const active = checkRouteActive(router, route)

  const iconWidth = cn({
    'w-[30px] h-[30px]': size === 'medium',
    'w-[20px] h-[20px]': size === 'small',
  })
  return (
    <Pressable onPress={() => (route ? router.push(route) : onPress?.())}>
      <div
        className={cn(
          'flex items-center gap-x-4 hover:bg-nav-hover font-medium rounded-lg cursor-pointer transition-all duration-150',
          active ? 'font-bold' : '',
          {
            'text-lg p-4': size === 'medium',
            'p-4': size === 'small',
          }
        )}
      >
        {Icon && <Icon className={iconWidth} />}
        {children}
      </div>
    </Pressable>
  )
}

export default memo(NavItem)
