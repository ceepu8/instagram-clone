import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate as PersistGateClient } from 'redux-persist/integration/react'

import { useStore } from '@/store'

const ReduxProvider = ({ children, initialReduxState }) => {
  const store = useStore(initialReduxState)
  const persistor = persistStore(store, {}, () => persistor.persist())

  return (
    <Provider store={store}>
      <PersistGateClient persistor={persistor}>{() => <>{children}</>}</PersistGateClient>
    </Provider>
  )
}

export default ReduxProvider
