import NextImage from 'next/image'

import { Button, HoverCard, LineBreak } from '@/components/base'
import { CheckIcon, MoreHorizontalIcon } from '@/components/icons'
import PreviewProfileCard from '@/components/shared/PreviewProfileCard'
import Assets from '@/constants/Assets'
import { useInputState } from '@/hooks/shared'
import { getTimeFromNow } from '@/utils'

import PostImageSlider from '../PostImageSlider'
import PostActions from './PostActions'
import PostComment from './PostComment'

const PostCommentList = () => {
  return <div>Comment</div>
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

const PreviewProfileHoverCard = ({ children }) => {
  return (
    <HoverCard trigger={children}>
      <PreviewProfileCard />
    </HoverCard>
  )
}

const PostHeader = ({ owner }) => {
  return (
    <div className="flex items-center space-x-4 border-b border-divide px-4 pb-3">
      <div className="shrink-0">
        <PreviewProfileHoverCard>
          <ProfileImage image={owner?.image} />
        </PreviewProfileHoverCard>
      </div>

      <div className="flex-1">
        <PreviewProfileHoverCard>{owner?.username}</PreviewProfileHoverCard>
      </div>
      <Button variant="ghost" icon={MoreHorizontalIcon} />
    </div>
  )
}

const PostLike = ({ liked = [], createdAt }) => {
  return (
    <div className="px-4">
      <p className="text-sm">
        Liked by <b>{liked?.length}</b> people
      </p>
      <p className="text-[10px] uppercase text-comment">{getTimeFromNow(createdAt)}</p>
    </div>
  )
}

const BlueTick = () => {
  return (
    <div className="relative ml-1 inline-block h-3 w-3 rounded-full bg-primary">
      <CheckIcon
        size={8}
        className="absolute left-1/2 top-1/2 inline -translate-x-1/2 -translate-y-1/2 text-default-reverse"
      />
    </div>
  )
}

const PostCaption = ({ owner, caption = '', createdAt }) => {
  const postCreatedTime = getTimeFromNow(createdAt)

  return (
    <div className="hidden space-x-4 px-4 md:flex">
      <PreviewProfileHoverCard triggerContent={<ProfileImage image={owner?.image} />} />
      <div className="flex flex-col space-y-1">
        <div className="text-left">
          <PreviewProfileHoverCard triggerContent={owner?.username} />
          <BlueTick />
          <span className="ml-1 text-sm">{caption}</span>
        </div>
        <p className="text-xs text-comment"> {postCreatedTime}</p>
      </div>
    </div>
  )
}

const PostDialogContent = (props) => {
  const [comment, getCommentInputOnChange] = useInputState('')
  const { owner, caption, createdAt, liked, images } = props

  return (
    <div className="relative flex h-full flex-col justify-between py-4 md:space-y-4">
      <PostHeader owner={owner} />
      <PostCaption owner={owner} caption={caption} createdAt={createdAt} />
      <div className="no-scrollbar relative hidden flex-1 overflow-auto px-4 md:block">
        <PostCommentList />
      </div>
      <div className="block md:hidden">
        <PostImageSlider images={images} />
      </div>
      <div className="bottom-4 left-0 flex w-full flex-col space-y-3 bg-background md:absolute">
        <LineBreak className="mb-0 mt-2 bg-popover-divide" />
        <PostActions />
        <PostLike liked={liked} createdAt={createdAt} />
        <LineBreak className="my-0 bg-popover-divide" />
        <PostComment value={comment} onChange={getCommentInputOnChange} />
      </div>
    </div>
  )
}

export default PostDialogContent
