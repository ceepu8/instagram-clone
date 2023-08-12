import PropTypes from 'prop-types'
import React, { createContext, useState, useEffect, useMemo } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export const ToastContext = createContext(null)

export const ToastProvider = ({ children }) => {
  const [styleOptions, setStyleOptions] = useState(null)
  const [backgroundStyled, setBackgroundStyled] = useState('var(--primary)')
  const [colorStyled, setColorStyled] = useState('var(--white)')
  const [durationStyled, setDurationStyled] = useState(4000)
  const [positionSelected, setPositionSelected] = useState('top-right')

  const notifyStyled = (message) => toast(message, styleOptions)

  const onSetStyles = ({
    background = backgroundStyled,
    color = colorStyled,
    duration = durationStyled,
    position = positionSelected,
  }) => {
    setStyleOptions({
      duration,
      position,
      style: {
        background,
        color,
      },
    })
  }

  useEffect(() => {
    if (styleOptions) notifyStyled()
  }, [styleOptions])

  const ToastProps = useMemo(
    () => ({
      toast,
      onSetStyles,
      backgroundStyled,
      setBackgroundStyled,
      colorStyled,
      setColorStyled,
      durationStyled,
      setDurationStyled,
      positionSelected,
      setPositionSelected,
    }),
    [
      toast,
      onSetStyles,
      backgroundStyled,
      setBackgroundStyled,
      colorStyled,
      setColorStyled,
      durationStyled,
      setDurationStyled,
      positionSelected,
      setPositionSelected,
    ]
  )

  return (
    <ToastContext.Provider value={ToastProps}>
      <Toaster />
      {children}
    </ToastContext.Provider>
  )
}

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
