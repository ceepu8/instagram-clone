import { useRouter } from 'next/router'

import { useGetPostsByUser } from '@/api'
import { AnimatedSpinnerIcon } from '@/components/icons'
import { PostCard } from '@/components/post'

const ProfileBody = () => {
  const router = useRouter()
  const { data: posts, isLoading } = useGetPostsByUser(router.query?.id)

  if (!posts?.length) {
    return null
  }

  return (
    <div className="sm:px-4 flex-1">
      {isLoading && <AnimatedSpinnerIcon className="text-primary" />}
      <div className="grid grid-cols-3 justify-start gap-1">
        {posts.map((post) => {
          return <PostCard key={post.id} {...post} />
        })}
      </div>
    </div>
  )
}

export default ProfileBody
