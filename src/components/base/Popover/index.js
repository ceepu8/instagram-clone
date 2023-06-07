import { X } from '@/components/icons'
import * as PopoverPrimitives from '@radix-ui/react-popover'
import cn from 'classnames'

const CloseIcon = () => {
  return (
    <PopoverPrimitives.Close
      className={cn(
        'absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1',
        'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
      )}
    >
      <X />
    </PopoverPrimitives.Close>
  )
}

const Popover = ({ children, trigger, hasCloseIcon = false, hasArrow = false }) => {
  const contentStyle = cn(
    'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
    'z-50 rounded-2xl p-2 shadow-55 md:w-56',
    'min-w-[290px] ml-4',
    'bg-popover'
  )

  return (
    <PopoverPrimitives.Root>
      <PopoverPrimitives.Trigger asChild>{trigger}</PopoverPrimitives.Trigger>
      <PopoverPrimitives.Content className={contentStyle} sideOffset={5}>
        {children}
        {hasCloseIcon && <CloseIcon />}
        {hasArrow && <PopoverPrimitives.Arrow className="fill-popover" />}
      </PopoverPrimitives.Content>
    </PopoverPrimitives.Root>
  )
}

export default Popover
