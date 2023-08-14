import prisma from '@/libs/prismadb'

async function handler(req, res) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      try {
        const { id, page = 1, limit = 10 } = req.query

        const skip = (+page - 1) * +limit
        const take = +limit

        const follow = await prisma.follow.findMany({
          where: {
            followedId: id,
            isFollowing: true,
          },
          select: {
            following: {
              select: {
                id: true,
                username: true,
                image: true,
              },
            },
          },
          skip,
          take,
        })

        const totalCount = await prisma.follow.count()

        const data = follow.map((item) => item.following)

        return res.status(200).json({
          total: totalCount - 1,
          page: +page,
          limit: +limit,
          data,
        })
      } catch (error) {
        // console.log('[FOLLOW_FOLLOWERS]', error)
        return res.status(500).json({ message: 'Internal Error' })
      }

    default:
      return res.status(200).json({ message: 'Welcome to API Routes!' })
  }
}

export default handler
