import { useFollow, useUnfollow } from '@/apis/follow'
import { Button } from '@/components/base'
import { ChevronDown, MoreHorizontalIcon, UserPlusIcon } from '@/components/icons'

import FollowingSettingDialog from './FollowingSettingDialog'

const FollowButton = ({ loading, onClick }) => {
  return (
    <div className="h-[32px] w-[77px]">
      <Button variant="primary" size="small" fullWidth onClick={onClick} loading={loading}>
        Follow
      </Button>
    </div>
  )
}

const FollowingButton = ({ loading }) => {
  return (
    <div className="h-[32px] w-[122px]">
      <Button type="trigger" variant="secondary" size="small" fullWidth loading={loading}>
        Following <ChevronDown className="h-4 w-4 shrink-0" />
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
  return (
    <>
      <div className="order-3 mt-4 flex basis-full items-center space-x-2 md:order-2 md:mt-0 md:basis-auto md:space-x-4">
        <ToggleFollow user={user} />
        <Button variant="secondary" size="small">
          Message
        </Button>
        <Button variant="secondary" icon={UserPlusIcon} size="small" className="h-8 w-8" />
      </div>
      <Button icon={MoreHorizontalIcon} variant="ghost" className="order-1 md:order-2" />
    </>
  )
}

export default UserProfileSettings
