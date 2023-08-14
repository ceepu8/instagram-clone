const MobileUserStatistics = ({ user }) => {
  const statistics = ['posts', 'followers', 'followings']

  return (
    <ul className="flex items-center border-b border-t border-divide py-2 text-center sm:hidden">
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
