import * as RadixSelect from '@radix-ui/react-select'
import React from 'react'

import { CheckIcon, ChevronDown, ChevronUp } from '@/components/icons'
import { cn } from '@/utils'

export const Select = ({ children, trigger, className, ...props }) => {
  return (
    <RadixSelect.Root className={className} {...props}>
      {trigger}
      <RadixSelect.Portal>{children}</RadixSelect.Portal>
    </RadixSelect.Root>
  )
}

const ScrollUpButton = () => {
  const rootClassName = 'flex h-6 cursor-default items-center justify-center'

  return (
    <RadixSelect.ScrollUpButton className={rootClassName}>
      <ChevronUp size={18} />
    </RadixSelect.ScrollUpButton>
  )
}

const ScrollDownButton = () => {
  const rootClassName = 'flex h-6 cursor-default items-center justify-center'

  return (
    <RadixSelect.ScrollDownButton className={rootClassName}>
      <ChevronDown size={18} />
    </RadixSelect.ScrollDownButton>
  )
}

export const SelectContent = ({ children, className, ...props }) => {
  return (
    <RadixSelect.Content
      className={cn(
        'shadow-xl overflow-hidden rounded-md bg-popover',
        'border border-divide',
        className
      )}
      {...props}
    >
      <ScrollUpButton />
      <RadixSelect.Viewport className="p-2">{children}</RadixSelect.Viewport>
      <ScrollDownButton />
    </RadixSelect.Content>
  )
}

export const SelectItem = React.forwardRef(
  ({ children, className, hasCheckIcon = false, ...props }, forwardedRef) => {
    return (
      <RadixSelect.Item
        className={cn(
          'relative flex items-center pl-5',
          'h-6 cursor-pointer select-none rounded-md leading-none hover:border-none focus:outline-none',
          'text-xs text-default hover:text-hover',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <RadixSelect.ItemText className="text-xs">{children}</RadixSelect.ItemText>
        <RadixSelect.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
          {hasCheckIcon && <CheckIcon size={12} />}
        </RadixSelect.ItemIndicator>
      </RadixSelect.Item>
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
    <RadixSelect.Trigger className={cn(rootClassName)} {...props}>
      <SelectValue placeholder={children} />
      {hasIcon && icon}
    </RadixSelect.Trigger>
  )
}
export const SelectSeparator = () => {
  return <RadixSelect.Separator className="my-2 h-px bg-divide" />
}

export const SelectLabel = ({ children, className, ...props }) => {
  return (
    <RadixSelect.Label className={cn('px-5 text-xs leading-6', className)} {...props}>
      {children}
    </RadixSelect.Label>
  )
}

export const SelectValue = RadixSelect.Value
export const SelectIcon = RadixSelect.Icon

export const SelectGroup = RadixSelect.Group
