export const API_ROOT = process.env.NEXT_PUBLIC_HOST
export const SOCKET_IO = process.env.NEXT_PUBLIC_SERVER_URL
export const ROOT_URL = process.env.NEXT_PUBLIC_WEB_URL
export const API_INVITE = ''

export const TIMEOUT = 10000

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  API_ROOT,
  TIMEOUT,
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/register',
    VERIFY_CODE: '/auth/otp',
    AGE_VERIFY: '/age_verify',
    FORGOT_PASSWORD: '/auth/forget_password',
    VERIFY_RESET: '/auth/verify_reset_token',
    RESET_PASSWORD: '/auth/reset_password',
    RESEND_OTP: '/auth/resend_otp',
    DELETE: '/me/delete',
  },
}
