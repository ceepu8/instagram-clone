import Image from 'next/image'

import Button from '@/components/base/Button'
import HoverCard from '@/components/base/HoverCard'
import {
  BookmarkIcon,
  HeartIcon,
  MessageCircle,
  MoreHorizontalIcon,
  Send,
} from '@/components/icons'
import { useInputState } from '@/hooks/shared'
import { cn } from '@/utils'

import CardProfilePreview from '../CardProfilePreview'
import CommentInput from '../CommentInput'

const PreviewProfileHoverCard = ({ triggerContent }) => {
  const triggerBtn = (
    <Button variant="text-secondary" type="trigger" size="small" className="p-0 inline">
      {triggerContent}
    </Button>
  )
  return (
    <HoverCard trigger={triggerBtn}>
      <CardProfilePreview />
    </HoverCard>
  )
}

const PostHeader = () => {
  const profileImage = (
    <Image
      width={24}
      height={24}
      src="/profile.jpeg"
      alt="profile-image"
      className="rounded-full"
    />
  )
  return (
    <div className="flex items-center gap-x-3">
      <PreviewProfileHoverCard triggerContent={profileImage} />
      <PreviewProfileHoverCard triggerContent="mirea_03" />
      <Button variant="text-secondary" icon={MoreHorizontalIcon} className="ml-auto" />
    </div>
  )
}

const PostImage = () => {
  return (
    <div className="border-solid border-divide border rounded">
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
            variant="text-secondary"
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
    <div className="text-left">
      <PreviewProfileHoverCard triggerContent="mirea_03" />
      <span>&nbsp;</span>
      <span className="text-sm tracking-tight">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </span>

      <Button variant="text-secondary" size="small" className="text-comment font-medium">
        more
      </Button>
    </div>
  )
}

const PostComment = ({ value, onChange }) => {
  return (
    <>
      <Button variant="text-secondary" size="small" className="text-comment font-medium">
        View all comments
      </Button>
      <CommentInput
        variant="secondary"
        value={value}
        onChange={onChange}
        className="placeholder-comment font-medium"
      />
    </>
  )
}

const Post = () => {
  const [comment, getCommentInputOnChange] = useInputState('')
  return (
    <div className="space-y-2 py-4">
      <PostHeader />
      <PostImage />
      <PostActions />
      <PostContent />
      <PostComment value={comment} onChange={getCommentInputOnChange} />
    </div>
  )
}

export default Post
