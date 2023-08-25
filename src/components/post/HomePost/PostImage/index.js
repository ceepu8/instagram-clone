import Image from 'next/image'

const PostImage = () => {
  return (
    <div className="w-full rounded border border-solid border-divide">
      <Image
        height={1200}
        width={1200}
        src="/guinea-pig-4.jpeg"
        alt="post-image"
        className="rounded object-contain"
      />
    </div>
  )
}

export default PostImage
