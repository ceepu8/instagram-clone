import React from 'react'

import { cn } from '@/utils'

const ItemLabel = ({ label, isVisible = true, active = false }) => {
  return (
    <h2
      className={cn(
        'hidden transition-all delay-[50ms] duration-[100ms] lg:block',
        isVisible ? 'visible opacity-100' : 'invisible opacity-0',
        active && 'font-bold'
      )}
    >
      {label}
    </h2>
  )
}

export default ItemLabel
