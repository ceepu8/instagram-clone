import { Pressable } from '@react-aria/interactions'
import cn from 'classnames'
import { useRouter } from 'next/router'

export const checkRouteActive = (router, route) => {
  const active =
    router.asPath === route || router.pathname === route || router.asPath.endsWith(route)

  return active
}

const NavItem = ({ onPress, children, icon: Icon, route }) => {
  const router = useRouter()
  const active = checkRouteActive(router, route)
  return (
    <Pressable onPress={() => (route ? router.push(route) : onPress?.())}>
      <div
        className={cn(
          'flex items-center gap-x-4 text-lg hover:bg-nav-hover p-3 rounded-lg cursor-pointer transition-all duration-150',
          active ? 'font-bold' : ''
        )}
      >
        {Icon && <Icon width="30" height="30" className={cn({})} />}
        {children}
      </div>
    </Pressable>
  )
}

export default NavItem
