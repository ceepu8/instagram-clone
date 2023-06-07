import * as PopoverPrimitives from '@radix-ui/react-popover'
import cn from 'classnames'
import { X } from 'lucide-react'
import propTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

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

const Popover = ({
  children,
  trigger,
  hasCloseIcon = false,
  hasArrow = false,
  contentClassName,
}) => {
  const contentStyle = cn(
    'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
    'z-50 rounded-2xl p-2 shadow-55',
    'ml-4',
    'bg-popover'
  )

  return (
    <PopoverPrimitives.Root>
      <PopoverPrimitives.Trigger asChild>{trigger}</PopoverPrimitives.Trigger>
      <PopoverPrimitives.Content className={twMerge(contentStyle, contentClassName)} sideOffset={5}>
        {children}
        {hasCloseIcon && <CloseIcon />}
        {hasArrow && <PopoverPrimitives.Arrow className="fill-popover" />}
      </PopoverPrimitives.Content>
    </PopoverPrimitives.Root>
  )
}

Popover.propTypes = {
  children: propTypes.node.isRequired,
  trigger: propTypes.node.isRequired,
  hasCloseIcon: propTypes.bool,
  hasArrow: propTypes.bool,
}

export default Popover
