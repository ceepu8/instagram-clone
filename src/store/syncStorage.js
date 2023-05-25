import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

// issues Nextjs:https://github.com/vercel/next.js/discussions/15687
const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null)
    },
    setItem(_key, value) {
      return Promise.resolve(value)
    },
    removeItem() {
      return Promise.resolve()
    },
  }
}

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

export default storage
