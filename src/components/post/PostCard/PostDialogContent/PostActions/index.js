import { Button } from '@/components/base'
import { BookmarkIcon, HeartIcon, MessageCircle, Send } from '@/components/icons'

const PostActions = () => {
  const actionList = [
    {
      key: 'like',
      onPress: () => {},
      icon: HeartIcon,
    },
    {
      key: 'post-open',
      onPress: () => {},
      icon: MessageCircle,
    },
    {
      key: 'message',
      onPress: () => {},
      icon: Send,
    },
    {
      key: 'save',
      onPress: () => {},
      icon: BookmarkIcon,
    },
  ]
  return (
    <div className="flex gap-x-3 px-4">
      {actionList.map(({ key, onPress, icon }) => {
        return (
          <Button
            key={key}
            variant="text-secondary"
            icon={icon}
            onClick={onPress}
            rootClassName="last:ml-auto"
          />
        )
      })}
    </div>
  )
}

export default PostActions
