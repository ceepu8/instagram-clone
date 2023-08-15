import { useMemo } from 'react'

import { useAuth } from '../query/auth'

export const useIsMe = (userId) => {
  const { user: authUser } = useAuth()

  const isMe = useMemo(() => userId === authUser.id, [userId, authUser])

  return isMe
}
