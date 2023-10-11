import { PreviewProfileCard } from '@/components/shared'

const PostContent = ({ owner, caption }) => {
  const { username } = owner || {}
  return (
    <div className="h-fit text-left">
      <PreviewProfileCard triggerClassName="inline-block">
        <b className="text-xs">{username}</b>
      </PreviewProfileCard>
      <span>&nbsp;</span>
      <span className="text-sm tracking-tight">{caption}</span>
    </div>
  )
}

export default PostContent
