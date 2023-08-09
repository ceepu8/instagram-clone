const FollowCardItemSkeleton = () => {
  return (
    <div className="flex items-center space-x-2 animate-pulse">
      <div className="w-10 h-10 shrink-0 rounded-full bg-bright-gray" />
      <div className="flex flex-col flex-1 space-y-2">
        <div className="h-3 w-[77px] bg-bright-gray rounded-lg" />
        <div className="h-3 w-[120px] bg-bright-gray rounded-lg" />
      </div>
      <div className="h-8 w-[77px] bg-bright-gray rounded-lg" />
    </div>
  )
}

export default FollowCardItemSkeleton
