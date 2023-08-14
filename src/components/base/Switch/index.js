import * as SwitchPrimitive from '@radix-ui/react-switch'
import clsx from 'clsx'
import { forwardRef, useId } from 'react'
import { twMerge } from 'tailwind-merge'

const styles = {
  root: clsx(
    'group',
    'radix-state-checked:bg-primary radix-state-checked:border-primary',
    'radix-state-unchecked:bg-gainsboro dark:radix-state-unchecked:bg-gainsboro radix-state-unchecked:border-gainsboro',
    'relative inline-flex h-[24px] w-[44px] flex-shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out',
    'focus:outline-none focus-visible:ring focus-visible:ring-text focus-visible:ring-opacity-75'
  ),
  thumb: clsx(
    'group-radix-state-checked:translate-x-5',
    'group-radix-state-unchecked:translate-x-0',
    'pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out'
  ),
}

const Switch = forwardRef(
  (
    { label = '', checked, onChange, rootStyle = '', thumbStyle = '', labelStyle = '', ...rest },
    ref
  ) => {
    const id = useId()

    return (
      <form>
        <div className="flex items-center">
          {label && (
            <label htmlFor={id}>
              <span className={twMerge('pr-4 text-sm', labelStyle)}>{label}</span>
            </label>
          )}
          <SwitchPrimitive.Root
            ref={ref}
            id={id}
            checked={checked}
            className={twMerge(styles.root, rootStyle)}
            onCheckedChange={onChange}
            {...rest}
          >
            <SwitchPrimitive.Thumb className={twMerge(styles.thumb, thumbStyle)} />
          </SwitchPrimitive.Root>
        </div>
      </form>
    )
  }
)

export default Switch
