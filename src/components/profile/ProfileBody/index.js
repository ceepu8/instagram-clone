import { useRouter } from 'next/router'

import { ProfilePost, ProfileSavedPost } from '@/components/post'
import ProfileTaggedPost from '@/components/post/ProfileTaggedPost'
import { PROFILE_TAB_KEYS } from '@/constants/Keys'

const ProfileBody = () => {
  const router = useRouter()

  const profileTabs = {
    [PROFILE_TAB_KEYS.POSTS]: {
      component: ProfilePost,
    },
    [PROFILE_TAB_KEYS.SAVED]: {
      component: ProfileSavedPost,
    },
    [PROFILE_TAB_KEYS.POSTS]: {
      component: ProfileTaggedPost,
    },
    [PROFILE_TAB_KEYS.REELS]: {
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
