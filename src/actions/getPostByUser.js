import prisma from '@/libs/prismadb'

const getPostsByUser = async (username) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    })

    if (!user) {
      return []
    }

    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        ownerId: user.id,
      },
      select: {
        createdAt: true,
        owner: true,
        caption: true,
        images: true,
        videos: true,
        liked: true,
        comment: true,
      },
    })

    if (!posts.length) {
      return []
    }

    return posts
  } catch (error) {
    return []
  }
}

export default getPostsByUser
