// import Image from 'next/image'
import NextImage from 'next/image'
import { useMemo } from 'react'

import { SCREENS } from '@/constants'
import { useWindowSize } from '@/hooks/shared'

const PostImageSlider = ({ images = [] }) => {
  const windowSize = useWindowSize()

  return (
    <>
      <div className="w-full h-full hidden md:flex items-center justify-center relative">
        <NextImage fill src={images[0]} className="object-contain" alt="image" />
      </div>

      <div className="relative w-full block md:hidden">
        <NextImage width={1200} height={1200} src={images[0]} />
      </div>
    </>
  )
}

export default PostImageSlider
