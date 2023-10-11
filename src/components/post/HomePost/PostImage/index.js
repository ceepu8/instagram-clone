import Image from 'next/image'

const PostImage = ({ image }) => {
  return (
    <div className="w-full border border-solid border-divide">
      <Image
        height={1200}
        width={1200}
        src={image || '/guinea-pig-4.jpeg'}
        alt="post-image"
        className="object-contain"
      />
    </div>
  )
}

export default PostImage
