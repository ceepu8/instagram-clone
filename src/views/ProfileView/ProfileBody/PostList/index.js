import { useRouter } from 'next/router'

import { useGetPostsByUser } from '@/api'
import { Image } from '@/components/base'
import { AnimatedSpinnerIcon, CopyIcon } from '@/components/icons'
import { cn } from '@/utils'

const PostCard = ({ image, isMultipleImages }) => {
  return (
    <div key={image} className="relative">
      <Image width={310} height={310} src={image} alt="post image" />
      <CopyIcon
        size={24}
        className={cn('text-white absolute right-2 top-2', isMultipleImages ? 'block' : 'hidden')}
      />
    </div>
  )
}

const PostList = () => {
  const router = useRouter()
  const { data: posts, isLoading } = useGetPostsByUser(router.query?.id)

  console.log(isLoading)

  if (!posts?.length) {
    return null
  }

  return (
    <div className="h-full">
      {isLoading && <AnimatedSpinnerIcon className="text-primary" />}
      <div className="grid grid-cols-3 justify-start gap-1">
        {posts.map((post) => {
          const { images } = post
          return (
            <>
              {images.map((image) => (
                <PostCard key={image} image={image} isMultipleImages={images.length > 1} />
              ))}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default PostList
