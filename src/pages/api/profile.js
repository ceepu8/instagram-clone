import prisma from '@/libs/prismadb'

import authMiddleware from './middlewares/authMiddleware'

async function handler(req, res) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      try {
        const { userId } = req.user
        const currentUser = await prisma.user.findUnique({
          where: {
            id: userId,
          },
          select: {
            posts: true,
            email: true,
            phoneNumber: true,
            name: true,
            image: true,
            followers: true,
            followings: true,
          },
        })

        if (!currentUser) {
          return res.status(401).json({ message: 'Unauthorized' })
        }

        const { hashedPassword, ...user } = currentUser

        return res.status(200).json(user)
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
