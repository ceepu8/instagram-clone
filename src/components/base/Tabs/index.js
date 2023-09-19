import * as TabsPrimitive from '@radix-ui/react-tabs'
import React from 'react'

import { cn } from '@/utils'

const TabTrigger = ({ value, children }) => {
  return (
    <TabsPrimitive.Trigger
      key={`tab-trigger-${value}`}
      value={value}
      className={cn(
        'group',
        'border-b border-r first:border-t',
        'border-gray-300 dark:border-gray-600',
        'radix-state-active:border-b-gray-700 radix-state-inactive:bg-gray-50 dark:radix-state-active:border-b-gray-100 dark:radix-state-active:bg-gray-900 dark:radix-state-inactive:bg-gray-800 focus-visible:radix-state-active:border-b-transparent focus-visible:dark:radix-state-active:border-b-transparent',
        'flex-1 px-3 py-2.5',
        'focus:radix-state-active:border-b-red',
        'focus-visible:ring-purple-500 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'
      )}
    >
      {children}
    </TabsPrimitive.Trigger>
  )
}

const TabTriggerList = ({ children, className }) => {
  return (
    <TabsPrimitive.List
      className={cn('dark:bg-gray-800 flex w-full rounded-t-lg bg-white', className)}
    >
      {children}
    </TabsPrimitive.List>
  )
}

const TabContent = ({ value, children }) => {
  return (
    <TabsPrimitive.Content
      key={`tab-content-${value}`}
      value={value}
      className={cn('dark:bg-gray-800 rounded-b-lg bg-white px-6 py-4')}
    >
      {children}
    </TabsPrimitive.Content>
  )
}

const EnhancedTabsPrimitive = ({ defaultValue, children }) => {
  return <TabsPrimitive.Root defaultValue={defaultValue}>{children}</TabsPrimitive.Root>
}

const Tabs = ({ defaultValue, children }) => {
  return <EnhancedTabsPrimitive defaultValue={defaultValue}>{children}</EnhancedTabsPrimitive>
}

Tabs.TabTrigger = TabTrigger
Tabs.TabTriggerList = TabTriggerList
Tabs.TabContent = TabContent

export default Tabs
