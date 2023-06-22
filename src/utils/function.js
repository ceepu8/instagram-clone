import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const checkRouteActive = (router, route) => {
  const active =
    router.asPath === route || router.pathname === route || router.asPath.endsWith(route)
  return active
}

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function getEmailOrPhoneNumber(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const isEmail = emailRegex.test(value)

  if (isEmail) {
    return { email: value, phoneNumber: '' }
  }
  return { email: '', phoneNumber: value }
}
