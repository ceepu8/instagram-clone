/* eslint-disable prefer-destructuring */
export const API_ROOT = process.env.NEXT_PUBLIC_HOST
export const SOCKET_IO = process.env.NEXT_PUBLIC_SERVER_URL
export const ROOT_URL = process.env.NEXT_PUBLIC_WEB_URL

export const CLOUDINARY_UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
export const CLOUDINARY_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_NAME

export const API_INVITE = ''

export const CLOUDINARY_STORAGE_URL = process.env.CLOUDINARY_URL

export const TIMEOUT = 10000

export const API = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
  },
  POST: {
    UPLOAD: '/api/post',
  },
  IMAGE: {
    UPLOAD_CLOUDINARY: '/image/upload',
  },
  FOLLOW: {
    DO_FOLLOW: '/api/follow/:id',
  },
}
