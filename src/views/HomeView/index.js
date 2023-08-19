import PostList from './PostList'
import StorySlider from './StorySlider'

const HomeView = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-1 flex-col items-center justify-center gap-x-4">
        <StorySlider />
        <PostList />
      </div>
      <div className="hidden w-full max-w-[var(--feed-sidebar-width)] lg:block">Feed Sidebar</div>
    </div>
  )
}

export default HomeView
