/* eslint-disable react/button-has-type */
import propTypes from 'prop-types'
import { forwardRef } from 'react'

import { AnimatedSpinnerIcon } from '@/components/icons'
import { cn } from '@/utils'

const Button = forwardRef((props, ref) => {
  const {
    children,
    icon: Icon,
    onClick,
    variant = 'primary',
    size = 'medium',
    type = 'button',
    fullWidth = false,
    rootClassName,
    iconClassName,
    disabled = false,
    loading = false,
    ...rest
  } = props || {}
  const baseButtonClasses = cn(
    'focus:outline-none flex items-center justify-center gap-x-2 font-bold',
    fullWidth && 'w-full'
  )

  let buttonClasses = ''
  let btnSizeClasses = ''

  switch (variant) {
    case 'primary':
      buttonClasses = cn(
        baseButtonClasses,
        'rounded-lg text-white',
        'bg-btn-primary hover:bg-btn-primary-hover',
        'disabled:cursor-default disabled:bg-very-light-azure'
      )
      break

    case 'secondary':
      buttonClasses = cn(
        baseButtonClasses,
        'rounded-lg text-black',
        'bg-btn-secondary hover:bg-btn-secondary-hover'
      )
      break

    case 'text-primary':
      buttonClasses = cn(
        baseButtonClasses,
        'text-btn-text-primary hover:text-btn-text-primary-hover',
        'disabled:cursor-default disabled:text-btn-text-primary-hover'
      )
      break

    case 'text-secondary':
      buttonClasses = cn(
        baseButtonClasses,
        'text-btn-text-secondary hover:text-btn-text-secondary-hover'
      )
      break

    default:
      buttonClasses = cn(baseButtonClasses)
  }

  btnSizeClasses =
    children &&
    variant !== 'text-secondary' &&
    variant !== 'text-primary' &&
    cn({
      'px-4 h-8': size === 'small',
      'px-6 h-9': size === 'medium',
      'px-8 h-10': size === 'large',
    })

  const btnTextSizeClasses = cn({
    'text-sm': size === 'small',
    'text-base': size === 'medium',
    'text-lg': size === 'large',
  })

  const iconSize = cn({
    'w-3 h-3 leading-3': size === 'extra-small',
    'w-4 h-4 leading-4': size === 'small',
    'w-6 h-6 leading-6': size === 'medium',
    'w-8 h-8 leading-8': size === 'large',
  })

  return (
    <button
      ref={ref}
      className={cn(btnSizeClasses, btnTextSizeClasses, buttonClasses, rootClassName)}
      onClick={onClick}
      type={type || 'button'}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && <AnimatedSpinnerIcon className={cn(iconSize, iconClassName)} />}
      {!loading && children}
      {!loading && Icon && <Icon className={cn(iconSize, iconClassName)} />}
    </button>
  )
})

Button.propTypes = {
  icon: propTypes.elementType,
  onClick: propTypes.func,
  variant: propTypes.oneOf(['primary', 'secondary', 'text-primary', 'text-secondary']),
  size: propTypes.oneOf(['small', 'medium', 'large']),
  type: propTypes.oneOf(['button', 'submit', 'reset']),
  iconOnly: propTypes.bool,
  fullWidth: propTypes.bool,
  rootClassName: propTypes.string,
  iconClassName: propTypes.string,
}

export default Button
