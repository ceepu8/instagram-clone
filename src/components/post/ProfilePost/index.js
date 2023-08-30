import { useRouter } from 'next/router'

import { useGetPostsByUser } from '@/api'

import ProfilePostDialog from './ProfilePostDialog'
import ProfilePostItem from './ProfilePostItem'
import ProfilePostListSkeleton from './ProfilePostListSkeleton'

const ProfilePost = () => {
  const router = useRouter()
  const { data: posts, isLoading } = useGetPostsByUser(router.query?.id)

  return (
    <div className="grid grid-cols-3 justify-start gap-1">
      {isLoading && <ProfilePostListSkeleton />}
      {posts?.map((post) => {
        return (
          <ProfilePostDialog key={post.id} {...post}>
            <ProfilePostItem {...post} />
          </ProfilePostDialog>
        )
      })}
    </div>
  )
}

export default ProfilePost
