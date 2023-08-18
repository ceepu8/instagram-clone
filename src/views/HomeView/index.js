import PostList from './PostList'
import StorySlider from './StorySlider'

const HomeView = () => {
  return (
    <div className="flex justify-center gap-16">
      <div className="flex flex-1 flex-col items-center space-y-12 pt-12">
        <StorySlider />
        <PostList />
      </div>
      <div className="hidden w-full max-w-[var(--feed-sidebar-width)] lg:block">Feed Sidebar</div>
    </div>
  )
}

export default HomeView
