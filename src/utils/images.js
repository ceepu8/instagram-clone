// utils/imageUtils.js
const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/jpg']
const MAX_FILE_SIZE = 10 * 1024 * 1024

export const validateImage = (file) => {
  if (!file) {
    return false
  }

  if (file.size > MAX_FILE_SIZE) {
    return false
  }

  if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
    return false
  }

  return true
}
