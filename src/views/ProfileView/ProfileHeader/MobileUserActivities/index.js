import { FollowDialog } from './FollowDialog/index'

const MobileUserActivities = ({ user }) => {
  return (
    <ul className="items-center space-x-10 mb-4 hidden sm:flex">
      <li>
        <b>{user?.posts?.length || 0}</b> posts
      </li>

      <li>
        <FollowDialog variant="followers" userId={user?.id}>
          <b className="cursor-pointer">{user?.followers?.length || 0}</b>
        </FollowDialog>{' '}
        followers
      </li>

      <li>
        <FollowDialog variant="followings" userId={user?.id}>
          <b className="cursor-pointer">{user?.followings?.length || 0}</b>
        </FollowDialog>{' '}
        followings
      </li>
    </ul>
  )
}

export default MobileUserActivities
