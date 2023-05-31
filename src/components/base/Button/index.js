import cn from 'classnames'
import React from 'react'

function Button({
  children,
  icon: Icon,
  onClick,
  variant = 'text',
  size = 'medium',
  type = 'button',
  iconOnly = false,
  fullWidth = false,
  className,
}) {
  const baseButtonClasses = cn(
    'focus:outline-none flex items-center justify-center gap-x-2',
    fullWidth ? 'max-w-full' : 'max-w-fit'
  )

  let buttonClasses = ''
  let btnSizeClasses = ''

  switch (variant) {
    case 'primary':
      buttonClasses = cn(
        baseButtonClasses,
        'rounded-lg text-white font-bold',
        'bg-btn-primary hover:bg-btn-primary-hover',
        size
      )
      break

    case 'secondary':
      buttonClasses = cn(
        baseButtonClasses,
        'rounded-lg text-black font-bold',
        'bg-btn-secondary hover:bg-btn-secondary-hover',
        size
      )
      break

    case 'text-primary':
      buttonClasses = cn(
        baseButtonClasses,
        'text-btn-text-primary hover:text-btn-text-primary-hover font-bold'
      )
      break

    case 'text-secondary':
      buttonClasses = cn(
        baseButtonClasses,
        'text-btn-text-secondary hover:text-btn-text-secondary-hover font-bold'
      )
      break

    default:
      buttonClasses = cn(baseButtonClasses)
  }

  btnSizeClasses =
    !iconOnly &&
    cn({
      'text-sm py-1 px-3': size === 'small',
      'text-base py-2 px-4': size === 'medium',
      'text-lg py-2 px-6': size === 'large',
    })

  const iconSize = cn({
    'w-4 mx-auto h-4 leading-4': size === 'extra-small',
    'w-5 mx-auto h-5 leading-5': size === 'small',
    'w-7 mx-auto h-7 leading-7': size === 'medium',
    'w-9 mx-auto h-9 leading-9': size === 'large',
  })

  return (
    <button className={cn(buttonClasses, btnSizeClasses, className)} onClick={onClick} type={type}>
      {Icon && <Icon className={cn(iconSize)} />}
      {children}
    </button>
  )
}

export default Button
