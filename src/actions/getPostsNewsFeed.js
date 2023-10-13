import prisma from '@/libs/prismadb'

const getPostsNewsFeed = async (userId, page, limit) => {
  try {
    if (!userId) {
      return {
        data: [],
        pagination: {
          totalPages: 0,
          totalItems: 0,
          itemsPerPage: +limit,
          currentPage: +page,
          links: {
            nextPage: null,
            prevPage: null,
            firstPage: null,
            lastPage: null,
          },
        },
      }
    }

    const skip = (+page - 1) * +limit
    const take = +limit

    // Lấy thời điểm hiện tại
    const today = new Date()
    const threeDaysAgo = new Date(today)
    // Lấy thời điểm 3 ngày trước
    threeDaysAgo.setDate(today.getDate() - 3)

    const totalItems = await prisma.post.count({
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
    })

    const totalPages = Math.ceil(totalItems / take)

    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        owner: {
          followers: {
            some: {
              followingId: userId,
            },
          },
        },
        createdAt: {
          gte: threeDaysAgo,
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

    const response = {
      data: posts,
      pagination: {
        totalPages,
        totalItems,
        itemsPerPage: take,
        currentPage: +page,
        links: {
          nextPage: page < totalPages ? +page + 1 : null,
          prevPage: page > 1 ? +page - 1 : null,
          firstPage: 1,
          lastPage: totalPages > 0 ? totalPages : null,
        },
      },
    }

    return response
  } catch (error) {
    return {
      data: [],
      pagination: {
        totalPages: 0,
        totalItems: 0,
        itemsPerPage: +limit,
        currentPage: +page,
        links: {
          nextPage: null,
          prevPage: null,
          firstPage: null,
          lastPage: null,
        },
      },
    }
  }
}

export default getPostsNewsFeed
