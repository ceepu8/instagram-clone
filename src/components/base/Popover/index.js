import Button from '../Button'
import * as PopoverPrimitives from '@radix-ui/react-popover'
import cn from 'classnames'
import { X } from 'lucide-react'

const CloseIcon = () => {
  return (
    <PopoverPrimitives.Close
      className={cn(
        'absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1',
        'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
      )}
      aria-label="Close"
    >
      <X />
    </PopoverPrimitives.Close>
  )
}

const Popover = ({ children, trigger, hasCloseIcon = false }) => (
  <PopoverPrimitives.Root>
    <PopoverPrimitives.Trigger asChild>{trigger}</PopoverPrimitives.Trigger>

    <PopoverPrimitives.Portal>
      <PopoverPrimitives.Content
        className={cn(
          'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
          'z-50 rounded-2xl p-2 shadow-md md:w-56',
          'min-w-[290px] ml-4',
          'bg-popover'
        )}
        sideOffset={5}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{children}</div>
        {hasCloseIcon && <CloseIcon />}
        {/* <PopoverPrimitives.Arrow className="fill-popover" /> */}
      </PopoverPrimitives.Content>
    </PopoverPrimitives.Portal>
  </PopoverPrimitives.Root>
)

export default Popover
