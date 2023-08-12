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
          'text-xs text-nickel cursor-auto',
          'absolute top-1/2 -translate-y-1/2 left-2',
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
          'w-full p-2 rounded-sm',
          'text-sm',
          'border border-solid border-chinese-silver',
          'focus:border-philippine-gray placeholder-nickel',
          'focus:ring-offset-0',
          'bg-lotion',
          isHaveValue ? 'pt-4 pb-1 text-xs' : ''
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