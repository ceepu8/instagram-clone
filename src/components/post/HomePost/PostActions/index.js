import { Button } from '@/components/base'
import { BookmarkIcon, HeartIcon, MessageCircle, Send } from '@/components/icons'
import { cn } from '@/utils'

const PostActions = () => {
  const actionList = [
    {
      key: 'like',
      icon: HeartIcon,
    },
    {
      key: 'post-open',
      icon: MessageCircle,
    },
    {
      key: 'message',
      icon: Send,
    },
    {
      key: 'save',
      icon: BookmarkIcon,
    },
  ]

  const renderItem = ({ key, icon }, index) => {
    const isLast = index === actionList.length - 1
    return (
      <Button
        key={key}
        variant="ghost"
        size="icon"
        icon={icon}
        className={cn({
          'ml-auto': isLast,
        })}
      />
    )
  }

  return <div className="flex gap-x-3">{actionList.map(renderItem)}</div>
}

export default PostActions
