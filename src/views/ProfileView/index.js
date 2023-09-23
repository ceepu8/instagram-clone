import { ProfileBody, ProfileHeader, ProfileTabs } from '@/components/profile'
import { ProfileStory } from '@/components/stories'

const ProfileView = () => {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-84px)] max-w-[975px] flex-col">
      <ProfileHeader />
      <ProfileStory />
      <ProfileTabs />
      <ProfileBody />
    </div>
  )
}

export default ProfileView
