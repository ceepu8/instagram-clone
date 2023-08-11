import { useFollow, useUnfollow } from '@/api/follow'
import { Button } from '@/components/base'
import { ChevronDown, MoreHorizontalIcon, UserPlusIcon } from '@/components/icons'
import { useDevelopingMessage } from '@/hooks/custom'

import FollowingSettingDialog from './FollowingSettingDialog'

const FollowButton = ({ loading, onClick }) => {
  return (
    <div className="w-[77px] h-[32px]">
      <Button
        variant="primary"
        size="small"
        fullWidth
        onClick={onClick}
        loading={loading}
        rootClassName="h-full"
      >
        Follow
      </Button>
    </div>
  )
}

const FollowingButton = ({ loading }) => {
  return (
    <div className="w-[122px] h-[32px]">
      <Button variant="secondary" size="small" fullWidth loading={loading}>
        Following <ChevronDown className="w-4 h-4 shrink-0" />
      </Button>
    </div>
  )
}

const ToggleFollow = ({ user }) => {
  const { doFollow, isLoading: isDoFollowLoading } = useFollow(user, () => {}, 'friend_profile')
  const { doUnfollow, isLoading: isUnfollowLoading } = useUnfollow(user, () => {}, 'friend_profile')

  const handleFollow = () => {
    if (!user?.id || user?.follow_by_viewer) return
    doFollow()
  }

  if (!user?.follow_by_viewer) {
    return <FollowButton loading={isDoFollowLoading} onClick={handleFollow} />
  }

  return (
    <FollowingSettingDialog
      trigger={<FollowingButton loading={isUnfollowLoading} />}
      user={user}
      doUnfollow={doUnfollow}
    />
  )
}

const UserProfileSettings = ({ user }) => {
  const displayMessage = useDevelopingMessage()
  return (
    <>
      <div className="flex items-center space-x-2 md:space-x-4 basis-full md:basis-auto md:mt-0 mt-4 order-3 md:order-2">
        <ToggleFollow user={user} />
        <Button variant="secondary" size="small" onClick={displayMessage}>
          Message
        </Button>
        <Button
          variant="secondary"
          icon={UserPlusIcon}
          size="small"
          rootClassName="w-8 h-8"
          onClick={displayMessage}
        />
      </div>
      <Button
        icon={MoreHorizontalIcon}
        variant="text-secondary"
        rootClassName="order-1 md:order-2"
        onClick={displayMessage}
      />
    </>
  )
}

export default UserProfileSettings
