import NextImage from 'next/image'

import { Button, HoverCard, LineBreak } from '@/components/base'
import {
  BookmarkIcon,
  CheckIcon,
  HeartIcon,
  MessageCircle,
  MoreHorizontalIcon,
  Send,
} from '@/components/icons'
import { CardProfilePreview, CommentInput } from '@/components/shared'
import Assets from '@/constants/Assets'
import { useInputState } from '@/hooks/shared'
import { cn, getTimeFromNow } from '@/utils'

const PostComment = ({ value, onChange }) => {
  return (
    <CommentInput value={value} onChange={onChange} className="placeholder-comment font-medium" />
  )
}

const ProfileImage = ({ image }) => {
  return (
    <NextImage
      width={30}
      height={30}
      src={image || Assets.COMMON.PLACEHOLDER}
      className="rounded-full border border-divide"
      alt="Profile image"
    />
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

const PreviewProfileHoverCard = ({ triggerContent }) => {
  const triggerBtn = (
    <Button variant="text-secondary" rootClassName="shrink-0 p-0 inline w-fit h-[30px]">
      {triggerContent}
    </Button>
  )
  return (
    <HoverCard trigger={triggerBtn}>
      <CardProfilePreview />
    </HoverCard>
  )
}

const PostHeader = ({ owner }) => {
  return (
    <div className="flex items-center space-x-4 border-b border-divide -mx-4 px-4">
      <div className="shrink-0">
        <PreviewProfileHoverCard triggerContent={<ProfileImage image={owner?.image} />} />
      </div>

      <div className="flex-1">
        <PreviewProfileHoverCard triggerContent={owner?.name} />
      </div>
      <Button variant="text-secondary" icon={MoreHorizontalIcon} />
    </div>
  )
}

const PostLike = ({ liked = [], createdAt }) => {
  return (
    <div>
      <p className="text-sm">
        Liked by <b>{liked?.length}</b> people
      </p>
      <p className="text-comment text-[10px] uppercase">{getTimeFromNow(createdAt)}</p>
    </div>
  )
}

const PostCaption = ({ owner, caption = '', createdAt }) => {
  return (
    <div className="flex space-x-4">
      <PreviewProfileHoverCard triggerContent={<ProfileImage image={owner?.image} />} />
      <div className="flex flex-col space-y-1">
        <div className="flex">
          <div className="text-left">
            <PreviewProfileHoverCard triggerContent={owner?.name} />
            <div className="inline-block ml-1 w-3 h-3 rounded-full bg-primary relative">
              <CheckIcon
                size={8}
                className="text-base-reverse inline absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <span className="text-sm ml-1">{caption} lorem upsim mini game</span>
          </div>
        </div>
        <p className="text-comment text-xs">{getTimeFromNow(createdAt)}</p>
      </div>
    </div>
  )
}

const PostDialogContent = (props) => {
  const [comment, getCommentInputOnChange] = useInputState('')
  const { owner, caption, createdAt, liked } = props

  return (
    <div className="flex flex-col justify-between space-y-4 py-4 max-h-full relative">
      <PostHeader owner={owner} />
      <PostCaption owner={owner} caption={caption} createdAt={createdAt} />
      <div className="flex-1 overflow-auto no-scrollbar relative hidden md:block">
        Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop publishing software like
        Aldus PageMaker including versions of Lorem Ipsum. Ipsum has been the industry&apos;s
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including versions of Lorem
        Ipsum. Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop publishing software like
        Aldus PageMaker including versions of Lorem Ipsum. the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum. Ipsum has been the
        industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div className="sm:absolute bottom-4 left-0 w-full flex flex-col space-y-3 bg-background">
        <LineBreak className="-mx-4 bg-popover-divide" />
        <PostActions />
        <PostLike liked={liked} createdAt={createdAt} />
        <LineBreak className="-mx-4 bg-popover-divide" />
        <PostComment value={comment} onChange={getCommentInputOnChange} />
      </div>
    </div>
  )
}

export default PostDialogContent
