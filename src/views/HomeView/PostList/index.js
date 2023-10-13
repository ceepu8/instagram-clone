import { useEffect } from 'react'

import { useGetPostsNewsFeed } from '@/apis'
import { AnimatedBarSpinnerIcon } from '@/components/icons'
import { HomePost } from '@/components/post'
import { useAuth } from '@/hooks/query/auth'

const PostList = () => {
  const { user } = useAuth()
  const { data, isLoading, fetchNextPage } = useGetPostsNewsFeed(user?.username)

  console.log(data)

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchNextPage()
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="divide-y-px flex flex-1 items-center justify-center divide-divide">
      {isLoading && <AnimatedBarSpinnerIcon />}
      {!isLoading && (
        <div>
          {data.pages?.map((each) => {
            const { data: postList } = each || {}
            return (
              <>
                {(postList || []).map((post) => {
                  return <HomePost key={post.id} data={post} />
                })}
              </>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default PostList
