import { Save } from 'lucide-react'

import NoPostYet from '../NoPostYet'

const ProfileSavedPost = () => {
  const data = false

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      {!data?.length ? (
        <NoPostYet
          icon={Save}
          title="No Saved Post"
          message="When you save a post, it'll appear here."
        />
      ) : null}
    </div>
  )
}

export default ProfileSavedPost
