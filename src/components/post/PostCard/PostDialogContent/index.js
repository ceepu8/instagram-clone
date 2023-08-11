import NextImage from 'next/image'

import { Button, HoverCard, LineBreak } from '@/components/base'
import { CheckIcon, MoreHorizontalIcon } from '@/components/icons'
import { CardProfilePreview } from '@/components/shared'
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

const PreviewProfileHoverCard = ({ triggerContent }) => {
  const triggerBtn = (
    <Button variant="text-secondary" className="shrink-0 p-0 inline w-fit h-[30px]">
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
    <div className="flex items-center space-x-4 border-b border-divide px-4 pb-3">
      <div className="shrink-0">
        <PreviewProfileHoverCard triggerContent={<ProfileImage image={owner?.image} />} />
      </div>

      <div className="flex-1">
        <PreviewProfileHoverCard triggerContent={owner?.username} />
      </div>
      <Button variant="text-secondary" icon={MoreHorizontalIcon} />
    </div>
  )
}

const PostLike = ({ liked = [], createdAt }) => {
  return (
    <div className="px-4">
      <p className="text-sm">
        Liked by <b>{liked?.length}</b> people
      </p>
      <p className="text-comment text-[10px] uppercase">{getTimeFromNow(createdAt)}</p>
    </div>
  )
}

const BlueTick = () => {
  return (
    <div className="inline-block ml-1 w-3 h-3 rounded-full bg-primary relative">
      <CheckIcon
        size={8}
        className="text-base-reverse inline absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}

const PostCaption = ({ owner, caption = '', createdAt }) => {
  const postCreatedTime = getTimeFromNow(createdAt)

  return (
    <div className="space-x-4 px-4 hidden md:flex">
      <PreviewProfileHoverCard triggerContent={<ProfileImage image={owner?.image} />} />
      <div className="flex flex-col space-y-1">
        <div className="text-left">
          <PreviewProfileHoverCard triggerContent={owner?.username} />
          <BlueTick />
          <span className="text-sm ml-1">{caption}</span>
        </div>
        <p className="text-comment text-xs"> {postCreatedTime}</p>
      </div>
    </div>
  )
}

const PostDialogContent = (props) => {
  const [comment, getCommentInputOnChange] = useInputState('')
  const { owner, caption, createdAt, liked, images } = props

  return (
    <div className="flex flex-col justify-between md:space-y-4 py-4 h-full relative">
      <PostHeader owner={owner} />
      <PostCaption owner={owner} caption={caption} createdAt={createdAt} />
      <div className="flex-1 px-4 overflow-auto no-scrollbar relative hidden md:block">
        <PostCommentList />
      </div>
      <div className="block md:hidden">
        <PostImageSlider images={images} />
      </div>
      <div className="md:absolute bottom-4 left-0 w-full flex flex-col space-y-3 bg-background">
        <LineBreak className="bg-popover-divide mt-2 mb-0" />
        <PostActions />
        <PostLike liked={liked} createdAt={createdAt} />
        <LineBreak className="bg-popover-divide my-0" />
        <PostComment value={comment} onChange={getCommentInputOnChange} />
      </div>
    </div>
  )
}

export default PostDialogContent
