import Image from 'next/image'

import { HoverCard, Button } from '@/components/base'
import {
  BookmarkIcon,
  HeartIcon,
  MessageCircle,
  MoreHorizontalIcon,
  Send,
} from '@/components/icons'
import ProfileAvatar from '@/components/profile/ProfileAvatar'
import { useInputState } from '@/hooks/shared'
import { cn } from '@/utils'

import CardProfilePreview from '../../shared/CardProfilePreview'
import CommentInput from '../../shared/CommentInput'

const PreviewProfileHoverCard = ({ children }) => {
  return (
    <HoverCard trigger={children}>
      <CardProfilePreview />
    </HoverCard>
  )
}

const PostHeader = () => {
  return (
    <div className="flex items-center gap-x-3">
      <PreviewProfileHoverCard>
        <ProfileAvatar size={24} />
      </PreviewProfileHoverCard>
      <PreviewProfileHoverCard>
        <b className="text-xs">mirea_03</b>
      </PreviewProfileHoverCard>
      <Button variant="ghost" icon={MoreHorizontalIcon} className="ml-auto" />
    </div>
  )
}

const PostImage = () => {
  return (
    <div className="rounded border border-solid border-divide">
      <Image
        width={1200}
        height={1200}
        src="/guinea-pig-4.jpeg"
        alt="post-image"
        className="rounded object-contain"
      />
    </div>
  )
}

const PostActions = () => {
  const ActionList = [
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
  return (
    <div className="flex gap-x-3">
      {ActionList.map(({ key, icon }, index) => {
        const isLast = index === ActionList.length - 1
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
      })}
    </div>
  )
}

const PostContent = () => {
  return (
    <div className="h-fit text-left">
      <PreviewProfileHoverCard>
        <b className="text-xs">mirea_03</b>
      </PreviewProfileHoverCard>
      <span>&nbsp;</span>
      <span className="text-sm tracking-tight">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </span>
    </div>
  )
}

const PostComment = ({ value, onChange }) => {
  return (
    <>
      <Button variant="ghost" bold={false} size="small" className="font-medium text-comment">
        more
      </Button>
      <Button variant="ghost" bold={false} size="small" className="font-medium text-comment">
        View all comments
      </Button>
      <CommentInput
        variant="secondary"
        value={value}
        onChange={onChange}
        className="font-medium placeholder-comment"
      />
    </>
  )
}

const HomePost = () => {
  const [comment, getCommentInputOnChange] = useInputState('')
  return (
    <div className="max-w-[var(--feed-width-post)] space-y-2 py-4">
      <PostHeader />
      <PostImage />
      <div className="flex flex-col">
        <PostActions />
        <PostContent />
        <PostComment value={comment} onChange={getCommentInputOnChange} />
      </div>
    </div>
  )
}

export default HomePost
