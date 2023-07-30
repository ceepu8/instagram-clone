import prisma from '@/libs/prismadb'

import authMiddleware from './middlewares/authMiddleware'

async function handler(req, res) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      try {
        const { username } = req.query
        const { userId } = req.user

        if (!username) {
          return res.status(400).json({ message: 'Missing info' })
        }

        const currentUser = await prisma.user.findFirst({
          where: {
            username,
          },
          select: {
            posts: true,
            username: true,
            image: true,
            followers: {
              where: {
                isFollowing: true,
              },
            },
            followings: {
              where: {
                isFollowing: true,
              },
            },
            id: true,
          },
        })

        if (!currentUser) {
          return res.status(401).json({ message: 'Unauthorized' })
        }

        const follow = await prisma.follow.findFirst({
          where: {
            followedId: currentUser.id,
            followingId: userId,
            isFollowing: true,
          },
        })

        return res
          .status(200)
          .json({ ...currentUser, follow_by_viewer: follow?.isFollowing ?? false })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error, 'REGISTRATION_ERROR')
        return res.status(500).json({ message: 'Internal Error' })
      }

    default:
      return res.status(200).json({ message: 'Welcome to API Routes!' })
  }
}

export default authMiddleware(handler)
