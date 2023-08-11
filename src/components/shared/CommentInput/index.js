import EmojiPicker from 'emoji-picker-react'

import { Button, Popover } from '@/components/base'
import { Input } from '@/components/form'
import { SmileIcon } from '@/components/icons'
import { useDevelopingMessage } from '@/hooks/custom'
import { cn } from '@/utils'

const CommentInput = ({ variant = 'main', onChange, value }) => {
  const displayMessage = useDevelopingMessage()

  const handleInputEmoji = (e) => {
    onChange((prev) => prev + e.emoji)
  }

  return (
    <div className={cn('flex items-center w-full relative gap-x-2')}>
      <Popover
        contentClassName="p-0"
        trigger={
          <Button
            variant="text-secondary"
            size={variant === 'main' ? 'medium' : 'extra-small'}
            rootClassName={cn(variant === 'secondary' && 'order-3')}
            icon={SmileIcon}
          />
        }
      >
        <EmojiPicker onEmojiClick={handleInputEmoji} />
      </Popover>
      <Input
        clean
        value={value}
        onChange={onChange}
        placeholder="Add a comment..."
        inputClassName="placeholder-comment font-medium text-sm"
        wrapperClassName="flex-1"
      />

      <Button
        variant="text-primary"
        size="small"
        disabled={!value}
        rootClassName={cn(
          variant === 'secondary' && value ? 'block' : 'hidden',
          variant === 'main' && 'block'
        )}
        onClick={displayMessage}
      >
        Post
      </Button>
    </div>
  )
}

CommentInput.propTypes = {}

export default CommentInput
