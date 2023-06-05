import { Button, Input, Popover } from '@/components/base'
import { useInputState } from '@/hooks/useInputState'
import cn from 'classnames'
import EmojiPicker from 'emoji-picker-react'
import { SmileIcon } from 'lucide-react'
import PropTypes from 'prop-types'
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
          className="placeholder-comment font-medium"
        />
      </div>
      {value && (
        <Button variant="text-primary" rootClassName="p-0">
          Post
        </Button>
      )}
      <Popover
        contentClassName="p-0"
        trigger={<Button variant="text-secondary" size="extra-small" icon={SmileIcon} iconOnly />}
      >
        <EmojiPicker onEmojiClick={handleInputEmoji} />
      </Popover>
    </div>
  )
}

CommentInput.propTypes = {}

export default CommentInput