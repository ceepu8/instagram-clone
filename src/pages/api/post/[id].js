import getPostsByUser from '@/actions/getPostByUser'

async function handler(req, res) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      try {
        const { id } = req.query
        const posts = await getPostsByUser(id)
        return res.status(200).json(posts)
      } catch (error) {
        return res.status(500).json({ message: 'Internal Error' })
      }

    default:
      return res.status(200).json({ message: 'Welcome to API Routes!' })
  }
}

export default handler
