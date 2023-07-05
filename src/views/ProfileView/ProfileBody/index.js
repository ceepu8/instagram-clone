import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { useGetPostsByUser } from '@/api'
import { Image, LineBreak } from '@/components/base'
import { CopyIcon, GridIcon, TagIcon } from '@/components/icons'
import { useAuth } from '@/hooks/query/auth'
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
  const { data: posts } = useGetPostsByUser(router.query?.id)

  if (!posts?.length) {
    return null
  }
  return (
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
  )
}

const ProfileTabs = () => {
  const router = useRouter()
  const { user } = useAuth()

  return (
    <div className="border-t border-divide">
      <div className="flex justify-center space-x-16 ">
        <button
          type="button"
          onClick={() =>
            router.replace(`/profile/${user.id}?tab=posts`, undefined, { scroll: false })
          }
          className={cn(
            'flex items-center space-x-1 py-6',
            'text-xs text-comment tracking-wide font-bold',
            'border-t border-transparent',
            (!router.query?.tab || router.query?.tab === 'posts') && 'border-base'
          )}
        >
          <GridIcon size={12} />
          <span>POSTS</span>
        </button>
        <button
          type="button"
          onClick={() =>
            router.replace(`/profile/${user.id}?tab=tagged`, undefined, { scroll: false })
          }
          className={cn(
            'flex items-center space-x-1 py-6',
            'text-xs text-comment tracking-wide font-bold',
            'border-t border-transparent',
            router.query?.tab === 'tagged' && 'border-base'
          )}
        >
          <TagIcon size={12} />
          <span>TAGGED</span>
        </button>
      </div>
    </div>
  )
}

const ProfileBody = () => {
  return (
    <div className="sm:px-4">
      <ProfileTabs />
      <PostList />
    </div>
  )
}

export default ProfileBody
