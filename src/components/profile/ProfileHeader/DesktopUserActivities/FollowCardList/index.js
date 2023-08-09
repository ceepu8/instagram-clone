import FollowCardItem from './FollowCardItem'
import FollowCardItemSkeleton from './FollowCardItemSkeleton'

const FollowCardList = ({ isLoading, data }) => {
  const cardSkeletonList = Array(6)
    .fill('')
    .map((index) => <FollowCardItemSkeleton key={index} />)

  return (
    <div className="px-4 py-2 min-h-[340px]">
      <div className="flex flex-col space-y-4">
        {isLoading && cardSkeletonList}
        {!isLoading &&
          data?.length > 0 &&
          data?.map((user) => {
            return <FollowCardItem key={user?.id} user={user} />
          })}
        {!isLoading && !data?.length && (
          <p className="text-center text-sm text-comment">No followers found</p>
        )}
      </div>
    </div>
  )
}

export default FollowCardList
