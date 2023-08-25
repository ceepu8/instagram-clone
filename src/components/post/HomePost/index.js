import { useInputState } from '@/hooks/shared'

import PostContent from './Post Content'
import PostActions from './PostActions'
import PostComment from './PostComment'
import PostHeader from './PostHeader'
import PostImage from './PostImage'

const HomePost = () => {
  const [comment, getCommentInputOnChange] = useInputState('')
  return (
    <div className="max-w-[var(--feed-width-post)] space-y-2 py-4">
      <PostHeader />
      <PostImage />
      <PostActions />
      <PostContent />
      <PostComment value={comment} onChange={getCommentInputOnChange} />
    </div>
  )
}

export default HomePost
