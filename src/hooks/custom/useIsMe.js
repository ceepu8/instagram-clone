import { useMemo } from 'react'

import { useAuth } from '../query/auth'

export const useIsMe = (username) => {
  const { user: authUser } = useAuth()

  const isMe = useMemo(() => username === authUser.username, [username, authUser.id])

  return isMe
}
