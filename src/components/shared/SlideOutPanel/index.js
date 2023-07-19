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
        'h-screen fixed top-0 left-0 px-4 py-6',
        'w-[var(--slide-panel-width)] z-20',
        'bg-background',
        'border-r border-divide border-solid rounded-2xl'
      )}
      style={{ boxShadow: '4px 0 24px rgba(0,0,0,.15)' }}
    >
      {children}
    </Transition>
  )
}

export default SlideOutPanel
