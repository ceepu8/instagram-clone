import prisma from '@/libs/prismadb'

import authMiddleware from '../middlewares/authMiddleware'

async function handler(req, res) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'POST':
      try {
        const { userId } = req.user
        const { userIds } = req.body

        const data = userIds.reduce((acc, curr) => {
          acc[curr] = { isFollowing: false }
          return acc
        }, {})

        const follows = await prisma.follow.findMany({
          where: {
            followedId: {
              in: userIds,
            },
            followingId: userId,
          },
        })

        follows.forEach((follow) => {
          data[follow.followedId].isFollowing = follow.isFollowing
        })

        return res.status(200).json(data)
      } catch (error) {
        console.log('[FOLLOW_GET]', error)
        return res.status(500).json({ message: 'Internal Error' })
      }

    default:
      return res.status(200).json({ message: 'Welcome to API Routes!' })
  }
}

export default authMiddleware(handler)
