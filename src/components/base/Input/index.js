import clsx from 'clsx'
import PropTypes from 'prop-types'
import { forwardRef, useState } from 'react'

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
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)

    const handleInputBlur = () => {
      setIsFocused(false)
      if (!onBlur) return
      onBlur()
    }

    const inputClasses =
      !clean &&
      clsx({
        'bg-red': isFocused,
        'border-red border-solid border-[1px]': error,
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
          className={clsx(inputClasses, 'w-full bg-transparent', inputClassName)}
          autoCapitalize="off"
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
          maxLength={maxLength}
        />
        {error && <span>{errorMessage}</span>}
      </div>
    )
  }
)

Input.propTypes = {
  clean: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  inputClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
}

export default Input
