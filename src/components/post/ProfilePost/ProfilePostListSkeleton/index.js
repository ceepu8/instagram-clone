const ProfilePostListSkeleton = () => {
  const renderItem = (_, index) => (
    <div key={index} className="aspect-square w-full animate-pulse bg-bright-gray" />
  )
  return <>{Array(3).fill('').map(renderItem)}</>
}

export default ProfilePostListSkeleton
