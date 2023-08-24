import { Pressable } from '@react-aria/interactions'
import PropTypes from 'prop-types'
import { memo } from 'react'

import { SIDEBAR_MENU_KEYS } from '@/constants/Keys'
import { cn } from '@/utils'

import ItemLabel from '../components/ItemLabel'
import ItemSymbol from '../components/ItemSymbol'

const TriggerItem = ({
  onPress,
  icon,
  className,
  iconSize = 24,
  label,
  active = false,
  panelTriggered = false,
  name,
}) => {
  const isDialogTrigger = [SIDEBAR_MENU_KEYS.CREATE].includes(name)

  const rootClassnames = cn(
    'flex items-center gap-x-4 p-2',
    'text-default',
    'rounded-lg font-medium hover:bg-nav-hover',
    'cursor-pointer transition-all duration-150',
    'border border-solid border-transparent',
    active && !isDialogTrigger && 'border-gainsboro',
    className
  )

  return (
    <Pressable onPress={() => onPress?.()}>
      <div className={rootClassnames}>
        <ItemSymbol active={active} icon={icon} iconSize={iconSize} />
        <ItemLabel isVisible={!panelTriggered} active={active} label={label} />
      </div>
    </Pressable>
  )
}

TriggerItem.propTypes = {
  onPress: PropTypes.func,
  icon: PropTypes.node,
  className: PropTypes.string,
  iconSize: PropTypes.number,
}

export default memo(TriggerItem)
