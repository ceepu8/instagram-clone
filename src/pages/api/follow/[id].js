import prisma from '@/libs/prismadb'

import authMiddleware from '../middlewares/authMiddleware'

async function handler(req, res) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      try {
        const { userId } = req.user
        const { id } = req.query

        const follow = await prisma.follow.findFirst({
          where: {
            followedId: id,
            followingId: userId,
          },
        })

        if (!follow) {
          return res.status(200).json({ message: 'Not follow yet', isFollowing: false })
        }

        return res.status(200).json(follow)
      } catch (error) {
        return res.status(500).json({ message: 'Internal Error' })
      }

    default:
      return res.status(200).json({ message: 'Welcome to API Routes!' })
  }
}

export default authMiddleware(handler)
