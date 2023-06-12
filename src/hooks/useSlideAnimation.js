const { useEffect, useState } = require('react')

export const useSlideAnimation = (isShow) => {
  const [animationClassNames, setAnimationClassnames] = useState('')

  const animation = {
    show: 'animate-[slide-out-right_300ms_ease-in-out_forwards]',
    hidden: 'animate-[slide-back-right_300ms_ease-in-out_forwards]',
  }

  useEffect(() => {
    if (isShow) {
      setAnimationClassnames(animation.show)
    } else {
      setAnimationClassnames(animation.hidden)
    }
  }, [isShow])

  return animationClassNames
}
