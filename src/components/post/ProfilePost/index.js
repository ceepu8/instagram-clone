import { PackageOpen } from 'lucide-react'
import { useRouter } from 'next/router'

import { useGetPostsByUser } from '@/apis'

import EmptyPost from '../EmptyPost'
import ProfilePostDialog from './ProfilePostDialog'
import ProfilePostItem from './ProfilePostItem'
import ProfilePostListSkeleton from './ProfilePostListSkeleton'

const ProfilePost = () => {
  const router = useRouter()
  const { data: posts, isLoading } = useGetPostsByUser(router.query?.username)

  return (
    <div className="flex flex-1 flex-col">
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
        <EmptyPost
          icon={PackageOpen}
          title="No Post Uploaded"
          message="If you upload a post, it'll appear here"
        />
      )}
    </div>
  )
}

export default ProfilePost
