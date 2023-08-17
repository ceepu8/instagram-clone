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
      link: s.link,
      ghost: s.ghost,
      // link: 'underline-offset-4 hover:underline text-primary',
    },
    size: {
      small: 'h-8 px-4 text-sm',
      medium: 'h-9 px-6 text-default',
      large: 'h-10 px-8 text-lg',
      icon: 'h-auto w-fit',
      text: 'h-auto w-fit text-sm',
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

    const getSize = () => {
      if (Icon && children) {
        return 'medium'
      }
      if (Icon && !children) {
        return 'icon'
      }
      if (children && (variant === 'ghost' || variant === 'link')) {
        return 'text'
      }
      return size
    }

    const rootClassName = cn(
      className,
      buttonVariants({ variant, size: getSize() }),
      fullWidth && 'w-full',
      bold && 'font-bold'
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
  variant: propTypes.oneOf(['primary', 'secondary', 'link', 'ghost', 'icon']),
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
