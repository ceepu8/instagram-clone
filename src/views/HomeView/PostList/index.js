import { useGetPostsNewsFeed } from '@/apis'
import { HomePost } from '@/components/post'
import { useAuth } from '@/hooks/query/auth'

const PostList = () => {
  const { user } = useAuth()
  const { data: posts, isLoading } = useGetPostsNewsFeed(user?.username)

  return (
    <div className="divide-y-px flex-1 divide-divide text-center">
      {(posts || []).map((post) => {
        return <HomePost key={post.id} data={post} />
      })}
    </div>
  )
}

export default PostList
