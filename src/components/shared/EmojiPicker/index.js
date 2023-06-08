import ReactEmojiPicker from 'emoji-picker-react'
import { useTheme } from 'next-themes'

const EmojiPicker = ({ height = 450, width = 380, onEmojiClick }) => {
  const { theme } = useTheme()

  return (
    <ReactEmojiPicker height={height} width={width} onEmojiClick={onEmojiClick} theme={theme} />
  )
}

export default EmojiPicker
