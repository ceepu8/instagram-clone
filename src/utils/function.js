import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { EMAIL_REGEX, PHONE_REGEX } from '@/constants'

export const checkRouteActive = (router, route) => {
  const active =
    router.asPath === route || router.pathname === route || router.asPath.endsWith(route)
  return active
}

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function getEmailOrPhoneNumber(value) {
  const isEmail = EMAIL_REGEX.test(value)

  if (isEmail) {
    return { email: value, phoneNumber: '' }
  }
  return { email: '', phoneNumber: value }
}

export function getEmailOrPhoneOrUsername(value) {
  const isEmail = EMAIL_REGEX.test(value)
  const isPhone = PHONE_REGEX.test(value)

  if (isEmail) {
    return { email: value }
  }

  if (isPhone) {
    return { phoneNumber: value }
  }

  return { username: value }
}
