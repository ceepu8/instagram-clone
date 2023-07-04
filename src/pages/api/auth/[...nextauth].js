import { PrismaAdapter } from '@next-auth/prisma-adapter'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

import { Routes } from '@/constants'
import prisma from '@/libs/prismadb'

import { generateAccessToken } from '../utils/jwt'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        phoneNumber: { label: 'phoneNumber', type: 'text' },
        username: { label: 'username', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.password) {
          throw new Error('Invalid Credentials')
        }

        if (!credentials?.email && !credentials?.phoneNumber && !credentials?.username) {
          throw new Error('Invalid Credentials')
        }

        let verification = ''

        if (credentials?.email) {
          verification = 'email'
        } else if (credentials?.phoneNumber) {
          verification = 'phoneNumber'
        } else {
          verification = 'username'
        }

        const user = await prisma.user.findFirst({
          where: {
            [verification]: credentials?.email ?? credentials?.phoneNumber ?? credentials?.username,
          },
        })

        if (!user || !user?.hashedPassword) {
          throw new Error('Invalid credentials')
        }

        const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword)

        if (!isCorrectPassword) {
          throw new Error('Invalid credentials')
        }

        return user
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.accessToken = generateAccessToken(user)
      }

      return token
    },
    async session({ session, token, user }) {
      session.user.id = token.id
      session.accessToken = token.accessToken
      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: Routes.HOME,
  },
}
export default NextAuth(authOptions)
