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
    <Button variant="text-secondary" size="small" rootClassName="p-0 inline">
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
      <Button variant="text-secondary" icon={MoreHorizontalIcon} rootClassName="ml-auto" />
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
    <div className="flex gap-x-3">
      {ActionList.map(({ key, onPress, icon }, index) => {
        const isLast = index === ActionList.length - 1
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

const PostContent = () => {
  return (
    <div className="text-left">
      <PreviewProfileHoverCard triggerContent="mirea_03" />
      <span>&nbsp;</span>
      <span className="text-sm tracking-tight">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </span>

      <Button variant="text-secondary" size="small" rootClassName="text-comment p-0 font-medium">
        more
      </Button>
    </div>
  )
}

const PostComment = ({ value, onChange }) => {
  return (
    <>
      <Button variant="text-secondary" rootClassName="text-comment text-sm h-fit p-0 font-medium">
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
