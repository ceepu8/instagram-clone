import { useRef, useState, useEffect } from 'react'

export const useAutoPosition = () => {
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 })
  const popoverRef = useRef(null)

  useEffect(() => {
    const calculatePopoverPosition = () => {
      if (popoverRef.current) {
        const popoverRect = popoverRef.current.getBoundingClientRect()
        const { innerWidth, innerHeight } = window

        let { top } = popoverRect
        let { left } = popoverRect

        if (top + popoverRect.height > innerHeight) {
          top = Math.max(0, innerHeight - popoverRect.height)
        }
        if (left + popoverRect.width > innerWidth) {
          left = Math.max(0, innerWidth - popoverRect.width)
        }

        setPopoverPosition({ top, left })
      }
    }

    window.addEventListener('resize', calculatePopoverPosition)

    calculatePopoverPosition()

    return () => {
      window.removeEventListener('resize', calculatePopoverPosition)
    }
  }, [])

  return { popoverPosition, popoverRef }
}
