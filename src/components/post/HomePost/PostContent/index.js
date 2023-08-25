import { HoverCard } from '@/components/base'
import { PreviewProfileCard } from '@/components/shared'

const PreviewProfileHoverCard = ({ children }) => {
  return (
    <HoverCard trigger={children}>
      <PreviewProfileCard />
    </HoverCard>
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

export default PostContent
