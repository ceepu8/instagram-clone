import getCurrentUser from '@/actions/getCurrentUser'
import getPostsNewsFeed from '@/actions/getPostsNewsFeed'
import prisma from '@/libs/prismadb'

import authMiddleware from '../middlewares/authMiddleware'

async function handler(req, res) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'POST':
      try {
        const { caption, images, videos } = req.body
        const { userId } = req.user

        const currentUser = await getCurrentUser(userId)

        if (!currentUser) {
          return res.status(401).json({ message: 'Unauthorized' })
        }

        if (!caption || !images.length) {
          return res.status(400).json({ message: 'Missing info' })
        }

        const post = await prisma.post.create({
          data: {
            caption,
            images,
            videos,
            owner: {
              connect: { id: currentUser.id },
            },
          },
        })

        return res.status(200).json({ message: 'Success', data: post })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error, 'REGISTRATION_ERROR')
        return res.status(500).json({ message: 'Internal Error' })
      }

    case 'GET':
      try {
        const { page = 1, limit = 5 } = req.query
        const { userId } = req.user
        const data = await getPostsNewsFeed(userId, page, limit)
        return res.status(200).json(data)
      } catch (error) {
        return res.status(500).json({ message: 'Internal Error' })
      }

    default:
      return res.status(200).json({ message: 'Welcome to API Routes!' })
  }
}

export default authMiddleware(handler)
