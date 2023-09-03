import { useRouter } from 'next/router'

import { useGetPostsByUser } from '@/apis'

import ProfilePostDialog from './ProfilePostDialog'
import ProfilePostItem from './ProfilePostItem'
import ProfilePostListSkeleton from './ProfilePostListSkeleton'

const ProfilePost = () => {
  const router = useRouter()
  const { data: posts, isLoading } = useGetPostsByUser(router.query?.id)

  return (
    <div>
      <div className="grid grid-cols-3 justify-start gap-1">
        {isLoading && <ProfilePostListSkeleton />}
        {!isLoading &&
          (posts || []).map((post) => {
            return (
              <ProfilePostDialog key={post.id} {...post}>
                <ProfilePostItem {...post} />
              </ProfilePostDialog>
            )
          })}
      </div>
      {!isLoading && !posts?.length && (
        <p className="text-center text-comment">There is no post yet</p>
      )}
    </div>
  )
}

export default ProfilePost
