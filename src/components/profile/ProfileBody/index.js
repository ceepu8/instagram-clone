import { useRouter } from 'next/router'

import { ProfilePost, ProfileSavedPost } from '@/components/post'
import ProfileTaggedPost from '@/components/post/ProfileTaggedPost'
import { ProfileReelList } from '@/components/reels'
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
    [PROFILE_TAB_KEYS.TAGGED]: {
      component: ProfileTaggedPost,
    },
    [PROFILE_TAB_KEYS.REELS]: {
      component: ProfileReelList,
    },
  }

  const { component: Component } = profileTabs[router.query?.tab || PROFILE_TAB_KEYS.POSTS] || {}

  return (
    <div className="mb-[var(--mobile-nav-bar-height)] flex flex-1 flex-col pb-3 sm:px-4 md:mb-0">
      <Component />
    </div>
  )
}

export default ProfileBody
