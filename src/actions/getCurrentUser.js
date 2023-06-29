import prisma from '@/libs/prismadb'

const getCurrentUser = async (email) => {
  try {
    const currentUser = await prisma.user.findUnique({
      where: {
        email,
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
