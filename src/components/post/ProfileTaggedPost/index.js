import { Tag } from 'lucide-react'

import NoPostYet from '../NoPostYet'

const ProfileTaggedPost = () => {
  const data = false

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      {!data?.length ? (
        <NoPostYet
          icon={Tag}
          title="Photos of you"
          message="When people tag you in photos, they'll appear here."
        />
      ) : null}
    </div>
  )
}

export default ProfileTaggedPost
