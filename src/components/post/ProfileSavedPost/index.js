import { Plus, Save } from 'lucide-react'
import { useRouter } from 'next/router'

import { Button } from '@/components/base'
import { useIsMe } from '@/hooks/custom'

import EmptyPost from '../EmptyPost'

// TODO:
const CreateCollectionSection = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <p className="text-xs text-comment">Only you can see what you&apos;ve saved</p>
      <Button variant="link" className="shrink-0">
        <Plus size={12} />
        New Collection
      </Button>
    </div>
  )
}

const ProfileSavedPost = () => {
  const router = useRouter()
  const isMe = useIsMe(router.query?.username)

  const data = false

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      {isMe && <CreateCollectionSection />}
      {!data?.length && (
        <EmptyPost
          icon={Save}
          title="No Saved Post"
          message={isMe && "When you save a post, it'll appear here."}
        />
      )}
    </div>
  )
}

export default ProfileSavedPost
