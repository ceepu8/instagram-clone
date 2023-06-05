import { Button, Input, Popover } from '@/components/base'
import { SmileIcon } from '@/components/icons'
import { useInputState } from '@/hooks/useInputState'
import EmojiPicker from 'emoji-picker-react'
import { useState } from 'react'

const CommentInput = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [value, getInputOnChange] = useInputState('')

  const handleInputBlur = () => {
    setIsFocused(false)
  }

  const handleInputEmoji = (e) => {
    getInputOnChange((prev) => prev + e.emoji)
  }

  const onSubmit = () => {}

  return (
    <div className="flex items-center w-full relative space-x-2">
      <div className="flex-1">
        <Input
          value={value}
          onChange={getInputOnChange}
          placeholder="Add a comment..."
          className="placeholder-comment font-medium text-sm"
        />
      </div>
      {value && (
        <Button variant="text-primary" rootClassName="p-0">
          Post
        </Button>
      )}
      <Popover
        contentClassName="p-0"
        trigger={<Button variant="text-secondary" size="small" icon={SmileIcon} />}
      >
        <EmojiPicker onEmojiClick={handleInputEmoji} />
      </Popover>
    </div>
  )
}

CommentInput.propTypes = {}

export default CommentInput
