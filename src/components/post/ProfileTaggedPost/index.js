import { Tag } from 'lucide-react'
import { useRouter } from 'next/router'

import { useIsMe } from '@/hooks/custom'

import EmptyPost from '../EmptyPost'

const ProfileTaggedPost = () => {
  const router = useRouter()
  const isMe = useIsMe(router.query?.username)

  const data = []

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      {!data?.length && (
        <EmptyPost
          icon={Tag}
          title={isMe ? 'Photos of you' : 'No Photos'}
          message={isMe && "When people tag you in photos, they'll appear here."}
        />
      )}
    </div>
  )
}

export default ProfileTaggedPost
