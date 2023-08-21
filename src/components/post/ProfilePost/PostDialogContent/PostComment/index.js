import CommentInput from '@/components/shared/CommentInput'

const PostComment = ({ value, onChange }) => {
  return (
    <div className="px-4">
      <CommentInput value={value} onChange={onChange} className="font-medium placeholder-comment" />
    </div>
  )
}

export default PostComment
