import ProfileAvatar from '@/components/profile/ProfileAvatar'
import { PreviewProfileCard } from '@/components/shared'

import PostMenuDialog from './PostMenuDialog'

const PostHeader = ({ user }) => {
  const { username, image } = user || {}
  return (
    <div className="flex items-center gap-x-3">
      <PreviewProfileCard>
        <ProfileAvatar size={24} image={image} />
      </PreviewProfileCard>
      <PreviewProfileCard>
        <b className="text-xs">{username}</b>
      </PreviewProfileCard>
      <PostMenuDialog />
    </div>
  )
}

export default PostHeader
