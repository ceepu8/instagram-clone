import { ProfileBody, ProfileHeader, ProfileTabs } from '@/components/profile'

const ProfileView = () => {
  return (
    <div className="max-w-[975px] mx-auto min-h-screen flex flex-col">
      <ProfileHeader />
      <ProfileTabs />
      <ProfileBody />
    </div>
  )
}

export default ProfileView
