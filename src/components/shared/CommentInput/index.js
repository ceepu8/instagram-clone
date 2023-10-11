import EmojiPicker from 'emoji-picker-react'

import { Button, Popover } from '@/components/base'
import { Input } from '@/components/form'
import { SmileIcon } from '@/components/icons'
import { cn } from '@/utils'

const CommentInput = ({ variant = 'main', onChange, value }) => {
  const handleInputEmoji = (e) => {
    onChange((prev) => prev + e.emoji)
  }

  return (
    <form className={cn('relative flex w-full items-center gap-x-2')}>
      <Input
        clean
        value={value}
        onChange={onChange}
        placeholder="Add a comment..."
        inputClassName="placeholder-comment font-medium text-sm"
        wrapperClassName="flex-1"
      />
      <Button
        variant="link"
        disabled={!value}
        className={cn(
          variant === 'secondary' && value ? 'block' : 'hidden',
          variant === 'main' && 'block'
        )}
      >
        Post
      </Button>

      <Popover
        contentClassName="p-0"
        trigger={
          <Button variant="ghost" className={cn(variant === 'secondary' && 'order-3')}>
            <SmileIcon size={13} />
          </Button>
        }
      >
        <EmojiPicker onEmojiClick={handleInputEmoji} />
      </Popover>
    </form>
  )
}

CommentInput.propTypes = {}

export default CommentInput
