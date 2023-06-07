import cn from 'classnames'
import propTypes from 'prop-types'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Button = forwardRef((props, ref) => {
  const {
    children,
    icon: Icon,
    onClick,
    variant = 'text',
    size = 'medium',
    type = 'button',
    iconOnly = false,
    fullWidth = false,
    rootClassName,
    ...rest
  } = props || {}
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
        'bg-btn-primary hover:bg-btn-primary-hover'
      )
      break

    case 'secondary':
      buttonClasses = cn(
        baseButtonClasses,
        'rounded-lg text-black font-bold',
        'bg-btn-secondary hover:bg-btn-secondary-hover'
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
      'text-xs py-1 px-3': size === 'small',
      'text-sm py-2 px-4': size === 'medium',
      'text-lg py-2 px-6': size === 'large',
    })

  const iconSize = cn({
    'w-3 h-3 leading-3': size === 'extra-small',
    'w-4 h-4 leading-4': size === 'small',
    'w-6 h-6 leading-6': size === 'medium',
    'w-9 h-9 leading-9': size === 'large',
  })

  return (
    <button
      {...rest}
      ref={ref}
      className={twMerge(buttonClasses, btnSizeClasses, rootClassName)}
      onClick={onClick}
      type={type}
    >
      {Icon && <Icon className={cn(iconSize)} />}
      {children}
    </button>
  )
})

Button.propTypes = {
  children: propTypes.node,
  icon: propTypes.elementType,
  onClick: propTypes.func,
  variant: propTypes.oneOf(['primary', 'secondary', 'text-primary', 'text-secondary']),
  size: propTypes.oneOf(['extra-small', 'small', 'medium', 'large']),
  type: propTypes.oneOf(['button', 'submit', 'reset']),
  iconOnly: propTypes.bool,
  fullWidth: propTypes.bool,
  rootClassName: propTypes.string,
}

export default Button
