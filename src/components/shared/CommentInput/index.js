import { Button, Input, Popover } from '@/components/base'
import { SmileIcon } from '@/components/icons'
import { useInputState } from '@/hooks/useInputState'
import EmojiPicker from 'emoji-picker-react'

const CommentInput = () => {
  const [value, getInputOnChange] = useInputState('')

  const handleInputEmoji = (e) => {
    getInputOnChange((prev) => prev + e.emoji)
  }

  const renderPostButton = value && (
    <Button variant="text-primary" size="small" rootClassName="p-0">
      Post
    </Button>
  )

  return (
    <div className="flex items-center w-full relative space-x-2">
      <Input
        clean={true}
        value={value}
        onChange={getInputOnChange}
        placeholder="Add a comment..."
        inputClassName="placeholder-comment font-medium text-sm"
        wrapperClassName="flex-1"
      />

      {renderPostButton}

      <Popover
        contentClassName="p-0"
        trigger={<Button variant="text-secondary" size="extra-small" icon={SmileIcon} />}
      >
        <EmojiPicker onEmojiClick={handleInputEmoji} />
      </Popover>
    </div>
  )
}

CommentInput.propTypes = {}

export default CommentInput
