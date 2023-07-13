import Image from 'next/image'

const PostImageSlider = ({ images = [] }) => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <Image fill src={images[0]} className="object-contain" alt="image" />
    </div>
  )
}

export default PostImageSlider
