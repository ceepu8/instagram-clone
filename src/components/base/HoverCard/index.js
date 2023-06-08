import { useAutoPosition } from '@/hooks'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import propTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

const HoverCard = ({ trigger, children, hasArrow = false, className }) => {
  const { popoverPosition, popoverRef } = useAutoPosition()

  return (
    <HoverCardPrimitive.Root
      ref={popoverRef}
      className="z-50"
      style={{
        position: 'absolute',
        top: popoverPosition.top,
        left: popoverPosition.left,
      }}
    >
      <HoverCardPrimitive.Trigger asChild>{trigger}</HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Content
        sideOffset={4}
        className={twMerge(
          'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
          'max-w-md rounded-lg p-4 md:w-full',
          'bg-background',
          'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
          'shadow-55',
          className
        )}
      >
        {hasArrow && (
          <HoverCardPrimitive.Arrow className="fill-current text-white dark:text-gray-800" />
        )}

        {children}
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
  )
}

HoverCard.propTypes = {
  trigger: propTypes.node.isRequired,
  children: propTypes.node.isRequired,
  hasArrow: propTypes.bool,
  className: propTypes.string,
}

export default HoverCard
