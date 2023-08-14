import emojiSections from '@/services/emoji.json'

const EmojiPicker = ({ onEmojiClick }) => {
  const handleEmojiSelection = (emoji) => {
    onEmojiClick(emoji)
  }

  return (
    <div className="flex max-h-[156px] max-w-[265px] flex-col space-y-2 overflow-auto bg-popover">
      {emojiSections.map(({ category, emojis }) => {
        return (
          <div key={category}>
            <div className="mb-4 text-sm font-semibold text-comment">{category}</div>
            <div className="flex flex-wrap gap-4">
              {emojis.map((emoji) => (
                <button
                  type="button"
                  key={emoji}
                  className="flex h-6 w-6 items-center justify-center text-lg"
                  onClick={() => handleEmojiSelection(emoji)}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default EmojiPicker
