import { useRouter } from 'next/router'

import { ProfilePost, ProfileSavedPost } from '@/components/post'
import ProfileTaggedPost from '@/components/post/ProfileTaggedPost'

const ProfileBody = () => {
  const router = useRouter()

  const profileTabs = {
    posts: {
      component: ProfilePost,
    },
    saved: {
      component: ProfileSavedPost,
    },
    tagged: {
      component: ProfileTaggedPost,
    },
    reels: {
      component: ProfileTaggedPost,
    },
  }

  const Component = !router.query?.tab
    ? profileTabs.posts.component
    : profileTabs[router.query?.tab].component

  return (
    <div className="flex flex-1 flex-col sm:px-4">
      <Component />
    </div>
  )
}

export default ProfileBody
