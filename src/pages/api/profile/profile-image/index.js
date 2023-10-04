import prisma from '@/libs/prismadb'

import authMiddleware from '../../middlewares/authMiddleware'

async function handler(req, res) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      try {
        const { userId } = req.user

        const { image } = req.body

        const updatedUser = await prisma.user.update({
          where: { id: userId },
          data: { image },
        })

        return res.status(200).json({ updatedUser })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error, 'GET_PROFILE_IMAGE_ERROR')
        return res.status(500).json({ message: 'Internal Error' })
      }

    case 'DELETE':
      try {
        const { userId } = req.user

        const updatedUser = await prisma.user.update({
          where: { id: userId },
          data: { image: '' },
        })

        return res.status(200).json({ updatedUser })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error, 'DELETE_PROFILE_IMAGE_ERROR')
        return res.status(500).json({ message: 'Internal Error' })
      }

    case 'PATCH':
      try {
        const { userId } = req.user
        const { image } = req.body

        const updatedUser = await prisma.user.update({
          where: { id: userId },
          data: { image },
        })

        return res.status(200).json({ updatedUser })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error, 'UPDATE_PROFILE_IMAGE_ERROR')
        return res.status(500).json({ message: 'Internal Error' })
      }

    default:
      return res.status(200).json({ message: 'Welcome to API Routes!' })
  }
}

export default authMiddleware(handler)
