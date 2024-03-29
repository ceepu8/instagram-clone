import { useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'

import { useFollow, useGetFollows, useUnfollow } from '@/apis/follow'
import { Button } from '@/components/base'
import { GET_FOLLOWS_KEY } from '@/constants'
import Assets from '@/constants/Assets'

const FollowCardItem = ({ user }) => {
  const queryClient = useQueryClient()

  const { data: followData, isLoading: isGetFollowsLoading } = useGetFollows([user.id])
  const isFollowing = followData?.[user?.id]?.isFollowing

  const updateFollowQueryData = (oldData, isFollowingUpdated) => {
    if (oldData) {
      return {
        ...oldData,
        [user.id]: {
          isFollowing: isFollowingUpdated,
        },
      }
    }
    return oldData
  }

  const { doFollow, isLoading: isDoFollowLoading } = useFollow(user, () => {
    queryClient.setQueryData([GET_FOLLOWS_KEY, { user_ids: [user.id] }], (oldData) =>
      updateFollowQueryData(oldData, true)
    )
  })

  const { doUnfollow, isLoading: isDoUnfollowLoading } = useUnfollow(user, () => {
    queryClient.setQueryData([GET_FOLLOWS_KEY, { user_ids: [user.id] }], (oldData) =>
      updateFollowQueryData(oldData, false)
    )
  })

  const { image, username } = user || {}

  return (
    <div className="flex items-center space-x-2">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-[0.5px]">
        <Image fill src={image || Assets.COMMON.PLACEHOLDER} alt="profile image" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-sm font-bold">{username || 'username'}</h2>
        <p className="text-sm text-comment">{username || 'description'}</p>
      </div>
      {isFollowing ? (
        <div className="h-[32px] w-[122px]">
          <Button
            variant="secondary"
            size="small"
            onClick={doUnfollow}
            loading={isDoUnfollowLoading || isGetFollowsLoading}
            fullWidth
          >
            Following
          </Button>
        </div>
      ) : (
        <div className="h-[32px] w-[77px]">
          <Button
            variant="primary"
            size="small"
            onClick={doFollow}
            loading={isDoFollowLoading || isGetFollowsLoading}
            fullWidth
          >
            Follow
          </Button>
        </div>
      )}
    </div>
  )
}

export default FollowCardItem
