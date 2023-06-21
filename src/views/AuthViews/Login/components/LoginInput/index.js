import { cn } from '@/utils'

const Input = ({
  placeholder,
  value,
  name,
  label,
  register,
  required = true,
  isHaveValue,
  ...props
}) => {
  return (
    <fieldset className="relative">
      <label
        htmlFor={name}
        className={cn(
          'text-xs cursor-auto',
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
          'focus:border-philippine-gray placeholder-nickle',
          'focus:ring-offset-0',
          isHaveValue ? 'pt-4 pb-1 text-xs' : ''
        )}
        {...register(name, { required })}
        {...props}
      />
    </fieldset>
  )
}

export default Input
