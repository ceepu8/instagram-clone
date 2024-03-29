import * as PopoverPrimitives from '@radix-ui/react-popover'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

import { XIcon } from '@/components/icons'
import { cn } from '@/utils'

const CloseIcon = () => {
  return (
    <PopoverPrimitives.Close
      className={cn(
        'absolute right-3.5 top-3.5 inline-flex items-center justify-center rounded-full p-1',
        'focus-visible:ring-purple-500 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'
      )}
    >
      <XIcon />
    </PopoverPrimitives.Close>
  )
}

const Popover = ({
  children,
  trigger,
  hasCloseIcon = false,
  hasArrow = false,
  contentClassName,
  ...props
}) => {
  const contentStyle = cn(
    'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
    'z-50 rounded-2xl p-2 shadow-55',
    'bg-popover',
    'focus-visible:outline-none'
  )

  return (
    <PopoverPrimitives.Root {...props}>
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
  children: PropTypes.node.isRequired,
  trigger: PropTypes.node.isRequired,
  hasCloseIcon: PropTypes.bool,
  hasArrow: PropTypes.bool,
}

export default Popover
