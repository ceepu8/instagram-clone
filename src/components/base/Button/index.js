/* eslint-disable react/button-has-type */
import propTypes from 'prop-types'
import { forwardRef } from 'react'

import { AnimatedSpinnerIcon } from '@/components/icons'
import { useDevelopingMessage } from '@/hooks/custom'
import { cn } from '@/utils'

const Button = forwardRef((props, ref) => {
  const showMessage = useDevelopingMessage()

  const {
    children,
    icon: Icon,
    onClick,
    variant = 'primary',
    size = 'medium',
    type = 'button',
    fullWidth = false,
    className,
    iconClassName,
    disabled = false,
    loading = false,
    ...rest
  } = props || {}
  const baseButtonClasses = cn(
    'focus:outline-none flex items-center justify-center gap-x-2 font-bold',
    fullWidth && 'w-full'
  )

  let btnStyleClasses = ''
  let btnSizeClasses = ''

  switch (variant) {
    case 'primary':
      btnStyleClasses = cn(
        'rounded-lg text-white',
        'bg-btn-primary hover:bg-btn-primary-hover',
        'disabled:cursor-default disabled:bg-very-light-azure'
      )
      break

    case 'secondary':
      btnStyleClasses = cn('rounded-lg text-black', 'bg-btn-secondary hover:bg-btn-secondary-hover')
      break

    case 'text-primary':
      btnStyleClasses = cn(
        'text-btn-text-primary hover:text-btn-text-primary-hover',
        'disabled:cursor-default disabled:text-btn-text-primary-hover'
      )
      break

    case 'text-secondary':
      btnStyleClasses = cn('text-btn-text-secondary hover:text-btn-text-secondary-hover')
      break

    default:
      btnStyleClasses = ''
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

  const getType = (_type) => {
    if (['submit', 'button'].includes(_type)) return _type
    return 'button'
  }

  const rootClassName = cn(
    baseButtonClasses,
    btnSizeClasses,
    btnStyleClasses,
    btnTextSizeClasses,
    className
  )

  const onClickDefault = () => {
    if (type === 'submit' || type === 'trigger') return
    showMessage()
  }

  return (
    <button
      ref={ref}
      className={rootClassName}
      onClick={onClick || onClickDefault}
      type={getType(type)}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && <AnimatedSpinnerIcon className={cn(iconSize, iconClassName)} />}
      {!loading && Icon && <Icon className={cn(iconSize, iconClassName)} />}
      {!loading && children}
    </button>
  )
})

Button.propTypes = {
  icon: propTypes.elementType,
  onClick: propTypes.func,
  variant: propTypes.oneOf(['primary', 'secondary', 'text-primary', 'text-secondary']),
  size: propTypes.oneOf(['small', 'medium', 'large']),
  type: propTypes.oneOf(['button', 'submit', 'reset', 'trigger']),
  iconOnly: propTypes.bool,
  fullWidth: propTypes.bool,
  className: propTypes.string,
  iconClassName: propTypes.string,
}

export default Button
