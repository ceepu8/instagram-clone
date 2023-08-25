import PropTypes from 'prop-types'

import DialogProvider from './Dialog'
import AuthProvider from './NextAuth'
import { ReactQueryProvider } from './ReactQuery'
import ReduxProvider from './Redux'
import ThemeProvider from './Theme'
import { ToastProvider } from './Toast'

// eslint-disable-next-line no-unused-vars
export function AppProviders({ children, pageProps }) {
  return (
    <AuthProvider>
      <ReduxProvider initialReduxState={pageProps.initialReduxState}>
        <ReactQueryProvider pageProps={pageProps}>
          <ThemeProvider>
            <ToastProvider>
              <DialogProvider>{children}</DialogProvider>
            </ToastProvider>
          </ThemeProvider>
        </ReactQueryProvider>
      </ReduxProvider>
    </AuthProvider>
  )
}

AppProviders.propTypes = {
  children: PropTypes.any,
  pageProps: PropTypes.any,
}
