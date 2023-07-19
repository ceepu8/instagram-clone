import getUsers from '@/actions/getUsers'

async function handler(req, res) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      try {
        const { query } = req
        const users = await getUsers(query)
        return res.status(200).json({ message: 'Success', users })
      } catch (error) {
        return res.status(500).json({ message: 'Internal Error' })
      }

    default:
      return res.status(200).json({ message: 'Welcome to API Routes!' })
  }
}

export default handler
