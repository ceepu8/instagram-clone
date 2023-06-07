import { Post } from '@/components/shared'
import { useTheme } from 'next-themes'

const HomeView = () => {
  return (
    <div className="flex justify-center gap-16">
      <div className="max-w-[var(--feed-width-post)]">
        <div className="text-center divide-y-[1px] divide-divide">
          <Post />
          <Post />
        </div>
      </div>
      <div className="max-w-[var(--feed-sidebar-width)] w-full lg:block hidden">Feed Sidebar</div>
    </div>
  )
}

export default HomeView
