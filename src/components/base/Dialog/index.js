import { Transition } from '@headlessui/react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Fragment, forwardRef } from 'react'

import { cn } from '@/utils'

export const DialogContent = forwardRef(({ title, description, children, className }, ref) => {
  return (
    <DialogPrimitive.Content
      ref={ref}
      forceMount
      className={cn(
        'fixed z-50',
        'min-w-[348px] max-w-fit rounded-xl md:w-full',
        'left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]',
        'bg-popover',
        'focus:outline-none',
        className
      )}
    >
      {title && (
        <DialogPrimitive.Title className="border-b border-popover-divide p-2 text-center font-semibold text-default">
          {title}
        </DialogPrimitive.Title>
      )}

      {description && (
        <DialogPrimitive.Description className="text-gray-700 dark:text-gray-400 mt-2 text-sm font-normal">
          {description}
        </DialogPrimitive.Description>
      )}

      {children}
    </DialogPrimitive.Content>
  )
})

const Dialog = ({ children, isOpen, onClose, trigger, ...props }) => {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose} {...props}>
      {trigger}
      <DialogPrimitive.Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black opacity-60 transition" />
          </Transition.Child>

          {children}
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export const DialogTrigger = DialogPrimitive.Trigger
export const DialogClose = DialogPrimitive.Close

export default Dialog
