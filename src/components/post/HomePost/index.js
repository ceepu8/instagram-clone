import { useInputState } from '@/hooks/shared'

import PostActions from './PostActions'
import PostComment from './PostComment'
import PostContent from './PostContent'
import PostHeader from './PostHeader'
import PostImage from './PostImage'

const HomePost = ({ data }) => {
  const { caption, images, owner } = data || {}
  const [comment, getCommentInputOnChange] = useInputState('')
  return (
    <div className="max-w-[var(--feed-width-post)] space-y-2 py-4">
      <PostHeader user={owner} />
      <PostImage image={images?.[0]} />
      <PostActions />
      <PostContent owner={owner} caption={caption} />
      <PostComment value={comment} onChange={getCommentInputOnChange} />
    </div>
  )
}

export default HomePost
