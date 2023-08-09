const MobileUserStatistics = ({ user }) => {
  const statistics = ['posts', 'followers', 'followings']

  return (
    <ul className="flex items-center text-center border-t border-b border-divide py-2 sm:hidden">
      {statistics.map((item) => (
        <li key={item} className="flex-1">
          <b>{user?.[item]?.length || 0}</b>
          <p className="text-comment">{item}</p>
        </li>
      ))}
    </ul>
  )
}

export default MobileUserStatistics
