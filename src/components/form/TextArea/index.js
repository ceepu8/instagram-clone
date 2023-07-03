import { forwardRef, memo } from 'react'

import { cn } from '@/utils'

const TextArea = forwardRef(
  ({ rows = '4', type = 'text', placeholder, value, onChange, className, ...props }, ref) => {
    const rootClassName = cn(
      'bg-background w-full p-0',
      'border-none focus:outline-0',
      'resize-none focus:overflow-hidden',
      'disabled:',
      className
    )

    return (
      <div>
        <textarea
          rows={rows}
          placeholder={placeholder}
          type={type}
          ref={ref}
          value={value}
          onChange={onChange}
          autoCapitalize="off"
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
          className={rootClassName}
          {...props}
        />
      </div>
    )
  }
)

export default memo(TextArea)
