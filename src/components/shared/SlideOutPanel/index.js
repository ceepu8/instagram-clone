import { useSlideAnimation } from '@/hooks'
import { cn } from '@/utils'

const SlideOutPanel = ({ children, isShow }) => {
  const animationClassNames = useSlideAnimation(isShow)

  return (
    <div
      className={cn(
        'h-screen fixed top-0 left-0 px-4 py-6',
        'transition-all duration-150 delay-300',
        'bg-background',
        'border-r border-divide border-solid rounded-2xl',
        animationClassNames
      )}
    >
      {children}
    </div>
  )
}

export default SlideOutPanel
