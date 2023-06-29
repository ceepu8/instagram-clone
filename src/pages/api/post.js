import getCurrentUser from '@/actions/getCurrentUser'
import prisma from '@/libs/prismadb'

export default async function handler(req, res) {
  const requestMethod = req.method
  switch (requestMethod) {
    case 'POST':
      try {
        const { caption, images, videos, userEmail } = req.body
        const currentUser = await getCurrentUser(userEmail)

        if (!currentUser?.email) {
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
        console.log(error, 'REGISTRATION_ERROR')
        return res.status(500).json({ message: 'Internal Error' })
      }

    default:
      return res.status(200).json({ message: 'Welcome to API Routes!' })
  }
}
