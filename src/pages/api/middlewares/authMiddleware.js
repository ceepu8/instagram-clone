import jwt from 'jsonwebtoken'

const authMiddleware = (handler) => async (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '')

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    req.user = decodedToken
    return handler(req, res)
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}

export default authMiddleware
