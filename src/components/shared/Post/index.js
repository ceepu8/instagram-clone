import CommentInput from '../CommentInput'
import ProfilePreview from '../ProfilePreview'
import { Button, HoverCard, LineBreak, Link } from '@/components/base'
import {
  BookmarkIcon,
  HeartIcon,
  MessageCircle,
  MoreHorizontalIcon,
  Send,
} from '@/components/icons'
import Image from 'next/image'

const UserProfileImage = ({ imageUrl = '' }) => {
  const triggerBtn = (
    <Button variant="text-secondary" rootClassName="pl-2 pr-0">
      <Image width={24} height={24} src={imageUrl} alt="profile-image" className="rounded-full" />
    </Button>
  )
  return (
    <HoverCard trigger={triggerBtn}>
      <ProfilePreview />
    </HoverCard>
  )
}

const UserProfileName = ({ name }) => {
  const triggerBtn = (
    <Button variant="text-secondary" rootClassName="p-0 inline">
      {name}
    </Button>
  )
  return (
    <HoverCard trigger={triggerBtn}>
      <ProfilePreview />
    </HoverCard>
  )
}

const Post = () => {
  return (
    <div className="space-y-2 py-4">
      <div className="flex items-center gap-x-3">
        <UserProfileImage imageUrl="/profile.jpeg" />
        <UserProfileName name="mirea_03" />
        <Button
          variant="text-secondary"
          icon={MoreHorizontalIcon}
          size="large"
          rootClassName="ml-auto"
        />
      </div>
      <div className="border-solid border-divide border-[1px] rounded">
        <Image
          width={1200}
          height={1200}
          src="/guinea-pig-4.jpeg"
          alt="post-image"
          className="rounded object-contain"
        />
      </div>

      <div className="flex gap-x-3">
        <Button
          variant="text-secondary"
          size="large"
          icon={HeartIcon}
          iconClassName="fill-red stroke-red"
        />
        <Button variant="text-secondary" size="large" icon={MessageCircle} />
        <Button variant="text-secondary" size="large" icon={Send} />
        <Button variant="text-secondary" size="large" icon={BookmarkIcon} rootClassName="ml-auto" />
      </div>

      <div className="text-left">
        <UserProfileName name="mirea_03" />
        <span>&nbsp;</span>
        <span>
          falling love with these cutie piggies &nbsp;
          <Link href="/">
            <span className="text-link">@guineavitamins</span>
          </Link>
          &nbsp; with love. the cuteness for breakfast *shining...
        </span>

        <Button
          variant="text-secondary"
          rootClassName="text-comment hover:text-none p-0 font-medium"
        >
          more
        </Button>
      </div>

      <Button variant="text-secondary" rootClassName="text-comment hover:text-none p-0 font-medium">
        View all comments
      </Button>

      <CommentInput
        onChange={() => console.log(123)}
        placeholder="Add a comment..."
        className="placeholder-comment font-medium"
      />
    </div>
  )
}

export default Post
