import prisma from '@/libs/prismadb'

const getUsers = async (query) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        username: {
          contains: query?.username || null,
        },
      },
      select: {
        name: true,
        username: true,
        image: true,
      },
    })

    if (!users.length) {
      return []
    }

    return users
  } catch (error) {
    return null
  }
}

export default getUsers
