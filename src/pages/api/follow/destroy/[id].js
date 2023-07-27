import prisma from '@/libs/prismadb'

import authMiddleware from '../../middlewares/authMiddleware'

async function handler(req, res) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'POST':
      try {
        const { userId } = req.user
        const { id } = req.query

        const existedFollow = await prisma.follow.findFirst({
          where: {
            followed_id: id,
            following_id: userId,
          },
        })

        if (!existedFollow) {
          return res.status(400).json({ message: 'Not follow yet!' })
        }

        const follow = await prisma.follow.updateMany({
          where: {
            followed_id: id,
            following_id: userId,
          },
          data: {
            is_following: false,
          },
        })

        if (!follow) {
          throw Error('error', 'Failed to update follow!')
        }

        return res.status(200).json({ success: true })
      } catch (error) {
        return res.status(500).json({ message: 'Internal Error' })
      }
    default:
      return res.status(200).json({ message: 'Welcome to API Routes!' })
  }
}

export default authMiddleware(handler)
