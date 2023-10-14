import { Pressable } from '@react-aria/interactions'
import { forwardRef, memo } from 'react'

import { Link } from '@/components/base'
import { MENU_NAV_TYPES } from '@/constants'
import { SIDEBAR_MENU_KEYS } from '@/constants/Keys'
import { cn } from '@/utils'

import ItemLabel from '../components/ItemLabel'
import ItemSymbol from '../components/ItemSymbol'

const NavItem = forwardRef(({ item, active, panelTriggered, as = 'li' }, ref) => {
  const { icon, route, className, label, iconSize, type, onPress, name } = item || {}

  const DIALOG_ITEMS = [SIDEBAR_MENU_KEYS.CREATE, SIDEBAR_MENU_KEYS.MORE]
  const isDialogTrigger = DIALOG_ITEMS.includes(name)

  const isTriggerType = type === MENU_NAV_TYPES.TRIGGER

  const rootClassnames = cn(
    'rounded-lg font-medium hover:bg-nav-hover',
    'cursor-pointer transition-[background] duration-150',
    'border border-solid border-transparent',
    {
      'border-gainsboro': active && !isDialogTrigger && isTriggerType,
    },
    className
  )

  const Container = as || 'li'
  let Element = Pressable

  if (!isTriggerType) {
    Element = Link
  }

  return (
    <Container ref={ref} className={rootClassnames}>
      <Element onPress={() => onPress?.()} href={route} disabled={!route}>
        <div className="flex items-center gap-x-4 p-2 text-default">
          <ItemSymbol active={active} icon={icon} iconSize={iconSize} />
          <ItemLabel isVisible={!panelTriggered} active={active} label={label} />
        </div>
      </Element>
    </Container>
  )
})

export default memo(NavItem)
