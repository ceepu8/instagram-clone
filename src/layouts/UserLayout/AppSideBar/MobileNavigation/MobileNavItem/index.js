import { Pressable } from '@react-aria/interactions'
import { useRouter } from 'next/router'

import { Link } from '@/components/base'
import { MENU_NAV_TYPES } from '@/constants'
import { checkRouteActive } from '@/utils'

const MobileNavItem = ({ item }) => {
  const router = useRouter()
  const { icon: Icon, route, type, onPress } = item || {}

  const active = checkRouteActive(router, route)
  const isTriggerType = type === MENU_NAV_TYPES.TRIGGER

  let Element = Pressable

  if (!isTriggerType) {
    Element = Link
  }

  return (
    <li className="shrink-0">
      <Element onPress={() => onPress?.()} href={route} disabled={!route}>
        <div className="flex-center">
          {Icon && <Icon active={active} size={active ? 26 : 24} />}
        </div>
      </Element>
    </li>
  )
}

export default MobileNavItem
