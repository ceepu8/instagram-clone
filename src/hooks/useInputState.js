import { useState } from 'react'

export function getInputOnChange(setValue) {
  return (val) => {
    if (!val) {
      setValue(val)
    } else if (typeof val === 'function') {
      setValue(val)
    } else if (typeof val === 'object' && 'nativeEvent' in val) {
      const { currentTarget } = val

      if (currentTarget.type === 'checkbox') {
        setValue(currentTarget.checked)
      } else {
        setValue(currentTarget.value)
      }
    } else {
      setValue(val)
    }
  }
}

export function useInputState(initialState) {
  const [value, setValue] = useState(initialState)
  return [value, getInputOnChange(setValue)]
}
