/* eslint-disable react/button-has-type */
import { cva } from 'class-variance-authority'
import propTypes from 'prop-types'
import { forwardRef } from 'react'

import { AnimatedSpinnerIcon } from '@/components/icons'
import { useDevelopingMessage } from '@/hooks/custom'
import { cn } from '@/utils'

import s from './button.module.css'

export const buttonVariants = cva(s.root, {
  variants: {
    variant: {
      primary: s.primary,
      secondary: s.secondary,
      'text-primary': s['text-primary'],
      'text-secondary': s['text-secondary'],
      // link: 'underline-offset-4 hover:underline text-primary',
    },
    size: {
      small: 'h-8 px-4 text-sm',
      medium: 'h-9 px-6 text-base',
      large: 'h-10 px-8 text-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
})

const Button = forwardRef(
  (
    {
      type,
      variant,
      onClick,
      children,
      icon: Icon,
      iconClassName,
      size = 'medium',
      disabled = false,
      fullWidth = false,
      loading = false,
      bold = true,
      className,
      ...props
    },
    ref
  ) => {
    const showMessage = useDevelopingMessage()

    const rootClassName = cn(
      buttonVariants({ variant, size }),
      fullWidth && 'w-full',
      bold && 'font-bold',
      className
    )

    const rootIconClassName = cn(
      'shrink-0',
      {
        'w-3 h-3 leading-3': size === 'extra-small',
        'w-4 h-4 leading-4': size === 'small',
        'w-6 h-6 leading-6': size === 'medium',
        'w-8 h-8 leading-8': size === 'large',
      },
      iconClassName
    )

    const onClickDefault = () => {
      if (type === 'submit' || type === 'trigger') return
      showMessage()
    }

    return (
      <button
        ref={ref}
        type={['submit', 'reset'].includes(type) ? type : 'button'}
        onClick={onClick || onClickDefault}
        disabled={disabled || loading}
        className={rootClassName}
        {...props}
      >
        {loading && <AnimatedSpinnerIcon className={rootIconClassName} />}
        {!loading && Icon && <Icon className={rootIconClassName} />}
        {!loading && children}
      </button>
    )
  }
)

Button.propTypes = {
  type: propTypes.oneOf(['button', 'submit', 'reset', 'trigger']),
  variant: propTypes.oneOf(['primary', 'secondary', 'text-primary', 'text-secondary']),
  onClick: propTypes.func,
  icon: propTypes.elementType,
  iconClassName: propTypes.string,
  size: propTypes.oneOf(['small', 'medium', 'large']),
  disabled: propTypes.bool,
  fullWidth: propTypes.bool,
  loading: propTypes.bool,
  bold: propTypes.bool,
  className: propTypes.string,
}

Button.displayName = 'Button'

export default Button
