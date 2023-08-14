import { FollowDialog } from './FollowDialog/index'

const DesktopUserStatistics = ({ user }) => {
  return (
    <ul className="mb-4 hidden items-center space-x-10 sm:flex">
      <li>
        <b>{user?.posts?.length || 0}</b> posts
      </li>

      <li>
        <FollowDialog
          trigger={<b className="cursor-pointer">{user?.followers?.length || 0}</b>}
          variant="followers"
          userId={user?.id}
        />{' '}
        followers
      </li>

      <li>
        <FollowDialog
          variant="followings"
          userId={user?.id}
          trigger={<b className="cursor-pointer">{user?.followings?.length || 0}</b>}
        />{' '}
        followings
      </li>
    </ul>
  )
}

export default DesktopUserStatistics
