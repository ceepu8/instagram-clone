import { useEffect, useMemo, useState } from 'react'

const MediaType = {
  mobile: 'mobile',
  tablet: 'tablet',
  pc: 'pc',
}

export const useBreakpoints = () => {
  const [media, setMedia] = useState(MediaType.pc)

  const breakpointValues = useMemo(
    () => ({
      isPC: media === MediaType.pc,
      isTablet: media === MediaType.tablet,
      isMobile: media === MediaType.mobile,
    }),
    [media]
  )

  useEffect(() => {
    const setInitialMedia = () => {
      const width = window.innerWidth
      if (width <= 640) {
        setMedia(MediaType.mobile)
      } else if (width <= 768) {
        setMedia(MediaType.tablet)
      } else {
        setMedia(MediaType.pc)
      }
    }

    setInitialMedia()
  }, [])

  return breakpointValues
}
