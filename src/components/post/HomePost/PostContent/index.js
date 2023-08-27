import { PreviewProfileCard } from '@/components/shared'

const PostContent = () => {
  return (
    <div className="h-fit text-left">
      <PreviewProfileCard triggerClassName="inline-block">
        <b className="text-xs">mirea_03</b>
      </PreviewProfileCard>
      <span>&nbsp;</span>
      <span className="text-sm tracking-tight">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </span>
    </div>
  )
}

export default PostContent
