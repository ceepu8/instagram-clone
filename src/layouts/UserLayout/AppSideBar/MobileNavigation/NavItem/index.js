import { Pressable } from '@react-aria/interactions'
import { useRouter } from 'next/router'

import { checkRouteActive } from '@/utils'

const NavItem = (props) => {
  const router = useRouter()

  const { icon: Icon, content: Content, route, onPress } = props || {}
  const active = checkRouteActive(router, route)

  return (
    <Pressable onPress={() => (route ? router.push(route) : onPress?.())}>
      <div className="flex h-[26px] w-[26px] flex-1 items-center justify-center">
        {Icon && <Icon active={active} size={active ? 26 : 24} />}
        {Content && <Content active={active} />}
      </div>
    </Pressable>
  )
}

export default NavItem
