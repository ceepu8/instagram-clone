import prisma from '@/libs/prismadb'

const getCurrentUser = async (id) => {
  try {
    const currentUser = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    if (!currentUser) {
      return null
    }

    return currentUser
  } catch (error) {
    return null
  }
}

export default getCurrentUser
