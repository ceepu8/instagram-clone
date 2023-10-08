import { useAuth } from '@/hooks/query/auth'
import { cn } from '@/utils'

const ItemSymbol = ({ icon: Icon, active, iconSize = 24, hasActiveBorder = false }) => {
  const { user } = useAuth()
  if (!Icon) {
    return null
  }

  return (
    <div
      className={cn(
        'shrink-0 border-[2px] border-transparent',
        hasActiveBorder && active && 'rounded-full border-black'
      )}
    >
      <Icon active={active} size={iconSize} image={user?.image} />
    </div>
  )
}

export default ItemSymbol
