import PropTypes from 'prop-types'
import { SSRProvider } from 'react-aria'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate as PersistGateClient } from 'redux-persist/integration/react'

import { ReactQueryProvider } from '@/contexts/ReactQuery'
import { useStore } from '@/store'

import ThemeProvider from './themeProvider'

// eslint-disable-next-line no-unused-vars
export function AppProviders({ children, locale, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  const persistor = persistStore(store, {}, () => persistor.persist())

  return (
    <SSRProvider>
      <Provider store={store}>
        <PersistGateClient persistor={persistor}>
          {() => (
            <ReactQueryProvider pageProps={pageProps}>
              <ThemeProvider>{children}</ThemeProvider>
            </ReactQueryProvider>
          )}
        </PersistGateClient>
      </Provider>
    </SSRProvider>
  )
}

AppProviders.propTypes = {
  children: PropTypes.any,
  pageProps: PropTypes.any,
}
