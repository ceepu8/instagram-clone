import cn from 'classnames'
import React from 'react'

function Button({
  children,
  Icon,
  onClick,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  className,
}) {
  const baseButtonClasses = 'font-bold focus:outline-none'
  let buttonClasses = ''
  let btnSizeClasses = ''
  let iconClasses = ''

  switch (variant) {
    case 'primary':
      buttonClasses = cn(
        baseButtonClasses,
        'rounded-lg text-white',
        'bg-vivid-cerulean hover:bg-crayola',
        size,
        className
      )
      break

    case 'icon':
      buttonClasses = cn(baseButtonClasses, 'hover:text-philippine-gray  ', className)
      break

    case 'text-icon':
      buttonClasses = cn(
        baseButtonClasses,
        'bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full flex items-center',
        className
      )
      break

    case 'text-only':
      buttonClasses = cn(baseButtonClasses, 'text-vivid-cerulean hover:text-hover')
      break

    default:
      buttonClasses = cn(baseButtonClasses, className)
  }

  btnSizeClasses =
    variant !== 'icon'
      ? cn({
          'text-sm py-1 px-3': size === 'small',
          'text-base py-1 px-4': size === 'medium',
          'text-lg py-2 px-6': size === 'large',
        })
      : cn({
          'text-sm w-8 h-8': size === 'small',
          'text-base w-10 h-10': size === 'medium',
          'text-lg w-12 h-12': size === 'large',
        })

  iconClasses = cn({
    'w-4 mx-auto h-4 leading-4': size === 'small',
    'w-6 mx-auto h-6 leading-6': size === 'medium',
    'w-8 mx-auto h-8 leading-8': size === 'large',
  })

  return (
    <button className={cn(buttonClasses, btnSizeClasses)} onClick={onClick} type={type}>
      {variant === 'icon' && <span className="sr-only">Add</span>}
      {Icon && <Icon className={cn(iconClasses)} />}
      {children}
    </button>
  )
}

export default Button
