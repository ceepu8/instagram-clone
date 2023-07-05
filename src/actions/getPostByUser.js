import prisma from '@/libs/prismadb'

const getPostsByUser = async (id) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        ownerId: id,
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
