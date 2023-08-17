import * as SelectPrimitive from '@radix-ui/react-select'
import React from 'react'

import { CheckIcon, ChevronDown, ChevronUp } from '@/components/icons'
import { cn } from '@/utils'

export const Select = ({ children, trigger, className, ...props }) => {
  return (
    <SelectPrimitive.Root className={className} {...props}>
      {trigger}
      <SelectPrimitive.Portal>{children}</SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}

const ScrollUpButton = () => {
  const rootClassName = 'flex h-6 cursor-default items-center justify-center'

  return (
    <SelectPrimitive.ScrollUpButton className={rootClassName}>
      <ChevronUp size={18} />
    </SelectPrimitive.ScrollUpButton>
  )
}

const ScrollDownButton = () => {
  const rootClassName = 'flex h-6 cursor-default items-center justify-center'

  return (
    <SelectPrimitive.ScrollDownButton className={rootClassName}>
      <ChevronDown size={18} />
    </SelectPrimitive.ScrollDownButton>
  )
}

export const SelectContent = ({ children, className, ...props }) => {
  return (
    <SelectPrimitive.Content
      className={cn(
        'shadow-xl overflow-hidden rounded-md bg-popover',
        'border border-divide',
        className
      )}
      {...props}
    >
      <ScrollUpButton />
      <SelectPrimitive.Viewport className="p-2">{children}</SelectPrimitive.Viewport>
      <ScrollDownButton />
    </SelectPrimitive.Content>
  )
}

export const SelectItem = React.forwardRef(
  ({ children, className, hasCheckIcon = false, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Item
        className={cn(
          'relative flex items-center pl-5',
          'h-6 cursor-pointer select-none rounded-md leading-none hover:border-none focus:outline-none',
          'text-xs text-default hover:text-hover',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <SelectPrimitive.ItemText className="text-xs">{children}</SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
          {hasCheckIcon && <CheckIcon size={12} />}
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    )
  }
)

export const SelectTrigger = ({
  children,
  className,
  hasIcon = true,
  hasShadow = true,
  ...props
}) => {
  const rootClassName = cn(
    'h-9 rounded-md bg-background focus:outline-none',
    'inline-flex items-center justify-center space-x-1 px-3 py-0',
    'text-default text-xs leading-none hover:text-hover',
    hasShadow && 'focus:shadow-55',
    className
  )

  const icon = (
    <SelectIcon className="SelectIcon">
      <ChevronDown size={18} strokeWidth="1.25" />
    </SelectIcon>
  )

  return (
    <SelectPrimitive.Trigger class={cn(rootClassName)} {...props}>
      <SelectValue placeholder={children} />
      {hasIcon && icon}
    </SelectPrimitive.Trigger>
  )
}
export const SelectSeparator = () => {
  return <SelectPrimitive.Separator className="my-2 h-px bg-divide" />
}

export const SelectLabel = ({ children, className, ...props }) => {
  return (
    <SelectPrimitive.Label className={cn('px-5 text-xs leading-6', className)} {...props}>
      {children}
    </SelectPrimitive.Label>
  )
}

export const SelectValue = SelectPrimitive.Value
export const SelectIcon = SelectPrimitive.Icon

export const SelectGroup = SelectPrimitive.Group
