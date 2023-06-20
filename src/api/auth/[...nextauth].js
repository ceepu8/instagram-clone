import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth from 'next-auth'

import prisma from '@/libs/prismadb'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
}
export default NextAuth(authOptions)
