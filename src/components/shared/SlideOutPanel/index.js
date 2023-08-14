import { Transition } from '@headlessui/react'

import { cn } from '@/utils'

const SlideOutPanel = ({ children, isShow }) => {
  return (
    <Transition
      show={isShow}
      enter="transition-transform duration-300"
      enterFrom="-translate-x-full"
      enterTo="translate-x-[73px]"
      leave="transition-transform duration-500"
      leaveFrom="translate-x-[73px] "
      leaveTo="-translate-x-full"
      className={cn(
        'fixed left-0 top-0 h-screen px-4 py-6',
        'z-20 w-[var(--slide-panel-width)]',
        'bg-background',
        'rounded-2xl border-r border-solid border-divide'
      )}
      style={{ boxShadow: '4px 0 24px rgba(0,0,0,.15)' }}
    >
      {children}
    </Transition>
  )
}

export default SlideOutPanel
