import { Post } from '@/components/shared'

const HomeView = () => {
  return (
    <div className="flex justify-center gap-16">
      <div className="max-w-[var(--feed-width-post)]">
        <div className="divide-y-[1px] divide-divide text-center">
          <Post />
          <Post />
        </div>
      </div>
      <div className="hidden w-full max-w-[var(--feed-sidebar-width)] lg:block">Feed Sidebar</div>
    </div>
  )
}

export default HomeView
