import { useEffect, useState } from 'react'

export function useWindowSize() {
  const isSSR = typeof window !== 'undefined'
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? window.innerWidth : 1200,
    height: isSSR ? window.innerHeight : 800,
  })

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    window.addEventListener('resize', changeWindowSize)

    return () => {
      window.removeEventListener('resize', changeWindowSize)
    }
  }, [])

  return windowSize
}
