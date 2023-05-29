import cn from 'classnames'
import React from 'react'

function Button({
  children,
  icon: Icon,
  onClick,
  variant = 'text',
  size = 'medium',
  type = 'button',
  className,
}) {
  const baseButtonClasses = 'focus:outline-none'
  let buttonClasses = ''
  let btnSizeClasses = ''
  let iconClasses = ''

  switch (variant) {
    case 'text':
      buttonClasses = cn(
        baseButtonClasses,
        'rounded-lg text-white font-bold',
        'bg-primary hover:bg-crayola',
        size
      )
      break

    case 'icon':
      buttonClasses = cn(baseButtonClasses, 'hover:text-philippine-gray')
      break

    case 'text-icon':
      buttonClasses = cn(
        baseButtonClasses,
        'bg-gray-200 hover:bg-nav-hover text-gray-700 rounded-md flex items-center justify-start gap-x-4 group w-full'
      )
      iconClasses = cn('transition-all duration-150 mx-0 group-hover:scale-110')
      break

    case 'text-only':
      buttonClasses = cn(baseButtonClasses, 'text-primary hover:text-hover font-bold')
      break

    default:
      buttonClasses = cn(baseButtonClasses)
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

  const iconSize = cn({
    'w-4 mx-auto h-4 leading-4': size === 'small',
    'w-6 mx-auto h-6 leading-6': size === 'medium',
    'w-8 mx-auto h-8 leading-8': size === 'large',
  })

  return (
    <button className={cn(buttonClasses, btnSizeClasses, className)} onClick={onClick} type={type}>
      {variant === 'icon' && <span className="sr-only">Add</span>}
      {Icon && <Icon className={cn(iconSize, iconClasses)} />}
      {children}
    </button>
  )
}

export default Button
