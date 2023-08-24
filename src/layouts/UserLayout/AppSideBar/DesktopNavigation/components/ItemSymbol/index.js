import React from 'react'

import { cn } from '@/utils'

const ItemSymbol = ({ icon: Icon, active, iconSize = 24, hasActiveBorder = false }) => {
  if (!Icon) {
    return null
  }

  return (
    <div
      className={cn(
        'shrink-0 border-[2px] border-transparent',
        hasActiveBorder && active && 'rounded-full border-black'
      )}
    >
      <Icon active={active} size={iconSize} />
    </div>
  )
}

export default ItemSymbol
