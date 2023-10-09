import { cn } from '@/utils'

const ItemLabel = ({ label, isVisible = true, active = false }) => {
  return (
    <span
      className={cn(
        'hidden transition-[visibility] delay-[50ms] duration-[100ms] lg:block',
        isVisible ? 'visible opacity-100' : 'invisible opacity-0',
        active && 'font-bold'
      )}
    >
      {label}
    </span>
  )
}

export default ItemLabel
