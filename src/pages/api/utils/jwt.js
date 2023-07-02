import jwt from 'jsonwebtoken'

export const generateAccessToken = (user) => {
  const payload = { userId: user.id, email: user.email, phoneNumber: user.phoneNumber }

  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: 10 * 60 * 60,
  })

  return accessToken
}

export const verifyAccessToken = (token) => {
  const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
  return decode
}
