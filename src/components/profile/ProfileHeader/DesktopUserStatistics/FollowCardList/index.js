import FollowCardItem from './FollowCardItem'
import FollowCardItemSkeleton from './FollowCardItemSkeleton'

const FollowCardList = ({ isLoading, data }) => {
  const cardSkeletonList = Array(6)
    .fill('')
    .map((index) => <FollowCardItemSkeleton key={index} />)

  return (
    <div className="min-h-[340px] px-4 py-2">
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
