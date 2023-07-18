import { Button } from '@/components/base'
import { BookmarkIcon, HeartIcon, MessageCircle, Send } from '@/components/icons'
import { cn } from '@/utils'

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
      {actionList.map(({ key, onPress, icon }, index) => {
        const isLast = index === actionList.length - 1
        return (
          <Button
            key={key}
            variant="text-secondary"
            icon={icon}
            onClick={onPress}
            rootClassName={cn({
              'ml-auto': isLast,
            })}
          />
        )
      })}
    </div>
  )
}

export default PostActions
