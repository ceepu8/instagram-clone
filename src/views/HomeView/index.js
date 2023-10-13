import FeedSidebar from './FeedSidebar'
import PostList from './PostList'
import StorySlider from './StorySlider'

const HomeView = () => {
  return (
    <div className="justify-center gap-x-20 md:flex">
      <div className="flex h-full w-full max-w-[var(--feed-width-story)] flex-1 flex-col items-center justify-center gap-x-4">
        <StorySlider />
        <PostList />
      </div>
      <div className="mt-2 hidden w-full max-w-[var(--feed-sidebar-width)] lg:block">
        <FeedSidebar />
      </div>
    </div>
  )
}

export default HomeView
