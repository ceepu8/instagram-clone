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
        'max-w-fit min-w-[348px] rounded-xl md:w-full',
        'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]',
        'bg-popover',
        'focus:outline-none',
        className
      )}
    >
      {title && (
        <DialogPrimitive.Title className="text-base text-center font-semibold border-b border-popover-divide p-2">
          {title}
        </DialogPrimitive.Title>
      )}

      {description && (
        <DialogPrimitive.Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
          {description}
        </DialogPrimitive.Description>
      )}

      {children}
    </DialogPrimitive.Content>
  )
})

const Dialog = ({ children, isOpen, onClose, ...props }) => {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose} {...props}>
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
            <DialogPrimitive.Overlay
              forceMount
              className="fixed inset-0 z-50 bg-black opacity-60 transition"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {children}
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export const DialogTrigger = DialogPrimitive.Trigger
export const DialogClose = DialogPrimitive.Close

export default Dialog
