import emojiSections from '@/services/emoji.json'

const EmojiPicker = ({ onEmojiClick }) => {
  const handleEmojiSelection = (emoji) => {
    onEmojiClick(emoji)
  }

  return (
    <div className="bg-popover max-w-[265px] max-h-[156px] overflow-auto flex flex-col space-y-2">
      {emojiSections.map(({ category, emojis }) => {
        return (
          <div key={category}>
            <div className="text-comment font-semibold text-sm mb-4">{category}</div>
            <div className="flex flex-wrap gap-4">
              {emojis.map((emoji) => (
                <button
                  type="button"
                  key={emoji}
                  className="w-6 h-6 text-lg flex items-center justify-center"
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
