import { Pressable } from '@react-aria/interactions'
import { useRouter } from 'next/router'

import { FacebookMessengerIcon } from '@/components/icons'
import { checkRouteActive, cn } from '@/utils'

const NavItem = (props) => {
  const router = useRouter()

  const { icon: Icon, content: Content, route, onPress } = props || {}
  const active = checkRouteActive(router, route)

  return (
    <Pressable onPress={() => (route ? router.push(route) : onPress?.())}>
      <div className="flex h-[26px] w-[26px] flex-1 items-center justify-center">
        {Icon && (
          <Icon
            size={active ? 26 : 24}
            className={cn(
              active && Icon !== FacebookMessengerIcon && 'fill-black stroke-white stroke-[1px]'
            )}
          />
        )}
        {Content && <Content active={active} />}
      </div>
    </Pressable>
  )
}

export default NavItem
