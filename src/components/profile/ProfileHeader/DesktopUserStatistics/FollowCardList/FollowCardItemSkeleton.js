const FollowCardItemSkeleton = () => {
  return (
    <div className="flex animate-pulse items-center space-x-2">
      <div className="h-10 w-10 shrink-0 rounded-full bg-bright-gray" />
      <div className="flex flex-1 flex-col space-y-2">
        <div className="h-3 w-[77px] rounded-lg bg-bright-gray" />
        <div className="h-3 w-[120px] rounded-lg bg-bright-gray" />
      </div>
      <div className="h-8 w-[77px] rounded-lg bg-bright-gray" />
    </div>
  )
}

export default FollowCardItemSkeleton
