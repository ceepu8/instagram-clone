const ProfilePostListSkeleton = () => {
  const renderItem = (_) => (
    <div key={_} className="aspect-square w-full animate-pulse bg-bright-gray" />
  )
  return <>{Array(3).fill('').map(renderItem)}</>
}

export default ProfilePostListSkeleton
