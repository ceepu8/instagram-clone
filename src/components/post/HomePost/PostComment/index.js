import { Button } from '@/components/base'
import { CommentInput } from '@/components/shared'

const PostComment = ({ value, onChange }) => {
  return (
    <div className="flex flex-col">
      <Button variant="ghost" bold={false} size="small" className="font-medium text-comment">
        more
      </Button>
      <Button variant="ghost" bold={false} size="small" className="font-medium text-comment">
        View all comments
      </Button>
      <CommentInput
        variant="secondary"
        value={value}
        onChange={onChange}
        className="font-medium placeholder-comment"
      />
    </div>
  )
}

export default PostComment
