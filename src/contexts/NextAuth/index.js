import { SessionProvider } from 'next-auth/react'

export default function AuthProvider({ children }) {
  return <SessionProvider refetchOnWindowFocus={false}>{children}</SessionProvider>
}
