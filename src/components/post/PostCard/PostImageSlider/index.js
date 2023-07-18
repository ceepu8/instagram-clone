// import Image from 'next/image'
import NextImage from 'next/image'

const PostImageSlider = ({ images = [] }) => {
  return (
    <>
      <div className="h-full hidden md:flex md:items-center md:justify-center relative">
        <NextImage
          width={0}
          height={0}
          sizes="100vw"
          src={images[0]}
          className="object-contain h-full w-full"
          alt="image"
        />
      </div>

      <div className="relative w-full block md:hidden">
        <NextImage width={1200} height={1200} src={images[0]} />
      </div>
    </>
  )
}

export default PostImageSlider
