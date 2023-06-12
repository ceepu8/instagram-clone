import { useSlideAnimation } from '@/hooks'
import { cn } from '@/utils'

const SlideOutPanel = ({ children, isShow }) => {
  const animationClassNames = useSlideAnimation(isShow)

  return (
    <div
      className={cn(
        'h-screen fixed top-0 left-0 p-6',
        'transition-all duration-150',
        'bg-background',
        'border-r border-divide border-solid rounded-xl',
        animationClassNames
      )}
    >
      {children}
    </div>
  )
}

export default SlideOutPanel
