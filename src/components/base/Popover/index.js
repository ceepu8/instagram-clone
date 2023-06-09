import * as PopoverPrimitives from '@radix-ui/react-popover'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

import { X } from '@/components/icons'

const CloseIcon = () => {
  return (
    <PopoverPrimitives.Close
      className={clsx(
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
  const contentStyle = clsx(
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
  children: PropTypes.node.isRequired,
  trigger: PropTypes.node.isRequired,
  hasCloseIcon: PropTypes.bool,
  hasArrow: PropTypes.bool,
}

export default Popover
