import { Pressable } from '@react-aria/interactions'
import { useRouter } from 'next/router'

import { Link } from '@/components/base'
import { MENU_NAV_TYPES } from '@/constants'
import { checkRouteActive } from '@/utils'

const NavItem = ({ item }) => {
  const router = useRouter()
  const { icon: Icon, route, type, onPress } = item || {}

  const active = checkRouteActive(router, route)
  const isTriggerType = type === MENU_NAV_TYPES.TRIGGER

  let Element = Pressable

  if (!isTriggerType) {
    Element = Link
  }

  return (
    <li>
      <Element onPress={() => onPress?.()} href={route} disabled={!route}>
        <div className="flex flex-1 items-center justify-center">
          {Icon && <Icon active={active} size={active ? 26 : 24} />}
        </div>
      </Element>
    </li>
  )
}

export default NavItem
