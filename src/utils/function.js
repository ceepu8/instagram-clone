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
  if (EMAIL_REGEX.test(value)) {
    return { email: value }
  }
  return { phoneNumber: value }
}

export function getEmailOrPhoneOrUsername(value) {
  if (EMAIL_REGEX.test(value)) {
    return { email: value }
  }
  if (PHONE_REGEX.test(value)) {
    return { phoneNumber: value }
  }
  return { username: value }
}

export function mergeRefs(refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value)
      } else if (ref != null) {
        ref.current = value
      }
    })
  }
}
