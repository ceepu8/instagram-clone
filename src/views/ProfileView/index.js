import ProfileBody from './ProfileBody'
import ProfileHeader from './ProfileHeader'
import ProfileTabs from './ProfileTabs'

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
