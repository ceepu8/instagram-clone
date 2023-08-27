import ProfileAvatar from '@/components/profile/ProfileAvatar'
import { PreviewProfileCard } from '@/components/shared'

import PostMenuDialog from './PostMenuDialog'

const PostHeader = () => {
  return (
    <div className="flex items-center gap-x-3">
      <PreviewProfileCard>
        <ProfileAvatar size={24} />
      </PreviewProfileCard>
      <PreviewProfileCard>
        <b className="text-xs">mirea_03</b>
      </PreviewProfileCard>
      <PostMenuDialog />
    </div>
  )
}

export default PostHeader
