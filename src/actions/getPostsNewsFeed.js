import prisma from '@/libs/prismadb'

const getPostsNewsFeed = async (userId, page, limit) => {
  try {
    if (!userId) {
      return []
    }

    const skip = (+page - 1) * +limit
    const take = +limit

    // Lấy thời điểm hiện tại
    const today = new Date()
    const threeDaysAgo = new Date(today)
    // Lấy thời điểm 3 ngày trước
    threeDaysAgo.setDate(today.getDate() - 3)

    const posts = await prisma.post.findMany({
      where: {
        owner: {
          followers: {
            some: {
              followingId: userId, // Điều kiện userId đang theo dõi
            },
          },
        },
        createdAt: {
          gte: threeDaysAgo, // Ngày tạo post lớn hơn hoặc bằng threeDaysAgo
        },
      },
      select: {
        id: true,
        caption: true,
        images: true,
        createdAt: true,
        updatedAt: true,
        owner: {
          select: {
            username: true,
            image: true,
          },
        },
      },
      skip,
      take,
    })

    if (!posts.length) {
      return []
    }

    return posts
  } catch (error) {
    return []
  }
}

export default getPostsNewsFeed
