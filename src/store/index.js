import { configureStore } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

import rootReducer from '@/store/reducers'

import storage from './syncStorage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const createStore = (preloadedState, middleware) => {
  const store = configureStore({
    reducer: persistedReducer,
    preloadedState,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
  })

  return store
}

let store
export const initializeStore = (preloadedState) => {
  const _middlewares = (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
    return middlewares
  }
  let _store = store ?? createStore(preloadedState, _middlewares)
  if (preloadedState && store) {
    _store = createStore({ ...store.getState(), ...preloadedState }, _middlewares)
    store = undefined
  }

  if (typeof window === 'undefined') return _store
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState])
}

export function getStore() {
  return store
}
