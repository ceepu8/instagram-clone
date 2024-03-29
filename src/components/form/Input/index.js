import PropTypes from 'prop-types'
import { forwardRef, memo, useState } from 'react'

import { cn } from '@/utils'

const Input = forwardRef(
  (
    {
      clean = false,
      label,
      value,
      onChange,
      onBlur,
      error,
      errorMessage,
      maxLength,
      placeholder,
      inputClassName,
      wrapperClassName,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)

    const handleInputBlur = (e) => {
      setIsFocused(false)
      if (!onBlur) return
      onBlur(e)
    }

    const inputClasses =
      !clean &&
      cn({
        'bg-red': isFocused,
        'border-red border-solid border': error,
      })

    return (
      <div className={wrapperClassName}>
        {label && <label>{label}</label>}
        <input
          ref={ref}
          value={value}
          onChange={onChange}
          onBlur={handleInputBlur}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          className={cn(inputClasses, 'w-full bg-transparent', inputClassName)}
          autoCapitalize="off"
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
          maxLength={maxLength}
          {...props}
        />
        {error && <span>{errorMessage}</span>}
      </div>
    )
  }
)

Input.propTypes = {
  clean: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  inputClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
}

export default memo(Input)
