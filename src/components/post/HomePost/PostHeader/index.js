import { HoverCard } from '@/components/base'
import ProfileAvatar from '@/components/profile/ProfileAvatar'
import { CardProfilePreview } from '@/components/shared'

import PostMenuDialog from './PostMenuDialog'

const PreviewProfileHoverCard = ({ children }) => {
  return (
    <HoverCard trigger={children}>
      <CardProfilePreview />
    </HoverCard>
  )
}

const PostHeader = () => {
  return (
    <div className="flex items-center gap-x-3">
      <PreviewProfileHoverCard>
        <ProfileAvatar size={24} />
      </PreviewProfileHoverCard>
      <PreviewProfileHoverCard>
        <b className="text-xs">mirea_03</b>
      </PreviewProfileHoverCard>
      <PostMenuDialog />
    </div>
  )
}

export default PostHeader
