import { ProfileBody, ProfileHeader, ProfileTabs } from '@/components/profile'

const ProfileView = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-[975px] flex-col">
      <ProfileHeader />
      <ProfileTabs />
      <ProfileBody />
    </div>
  )
}

export default ProfileView
