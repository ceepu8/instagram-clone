import bcrypt from 'bcrypt'

import prisma from '@/libs/prismadb'

export default async function handler(req, res) {
  try {
    const { email, username, password, fullName, phoneNumber } = req.body

    if (!email || !username || !password || !fullName) {
      return res.status(400).json({ message: 'Missing info' })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        email,
        username,
        fullName,
        phoneNumber,
        hashedPassword,
      },
    })

    return res.status(200).json({ message: 'Success', data: user })
  } catch (error) {
    console.log(error, 'REGISTRATION_ERROR')
    return res.status(500).json({ message: 'Internal Error' })
  }
}
