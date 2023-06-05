import cn from 'classnames'
import PropTypes from 'prop-types'
import { useState } from 'react'

const Input = ({ label, value, onChange, onBlur, error, errorMessage, placeholder, className }) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleInputChange = (e) => {
    onChange(e.target.value)
  }

  const handleInputBlur = () => {
    if (!onBlur) return
    setIsFocused(false)
    onBlur()
  }

  const inputClasses = cn(className, {
    'input--focused': isFocused,
    'input--error': error,
  })

  return (
    <div>
      {label && <label>{label}</label>}
      <input
        value={value}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onFocus={() => setIsFocused(true)}
        placeholder={placeholder}
        className={cn(inputClasses, 'w-full bg-transparent')}
      />
      {error && <span className="input__error-message">{errorMessage}</span>}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
}

export default Input
