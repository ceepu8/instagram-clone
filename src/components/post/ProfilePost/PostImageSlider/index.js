import NextImage from 'next/image'

const PostImageSlider = ({ images = [] }) => {
  return (
    <>
      <div className="relative hidden h-full md:flex md:items-center md:justify-center">
        <NextImage
          width={0}
          height={0}
          sizes="100vw"
          src={images[0]}
          className="h-full w-full object-contain"
          alt="image"
        />
      </div>

      <div className="relative block w-full md:hidden">
        <NextImage width={1200} height={1200} src={images[0]} />
      </div>
    </>
  )
}

export default PostImageSlider
