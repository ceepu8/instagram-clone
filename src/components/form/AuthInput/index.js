import { XCircle } from '@/components/icons'
import { cn } from '@/utils'

const AuthInput = ({
  placeholder,
  id,
  value,
  name,
  label,
  register,
  required = true,
  isHaveValue,
  errors,
  ...props
}) => {
  return (
    <fieldset className="relative">
      <label
        htmlFor={name}
        className={cn(
          'cursor-auto text-xs text-nickel',
          'absolute left-2 top-1/2 -translate-y-1/2',
          'transition-all duration-150',
          isHaveValue ? 'top-3 text-[8px]' : ''
        )}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        className={cn(
          'w-full rounded-sm p-2',
          'text-sm',
          'border border-solid border-chinese-silver',
          'placeholder-nickel focus:border-philippine-gray',
          'focus:ring-offset-0',
          'bg-lotion',
          isHaveValue ? 'pb-1 pt-4 text-xs' : ''
        )}
        {...register(name, { required })}
        {...props}
      />

      {errors[id] && (
        <div className="absolute right-2 top-2 text-red">
          <XCircle />
        </div>
      )}
    </fieldset>
  )
}

export default AuthInput
