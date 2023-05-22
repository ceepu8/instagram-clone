import { ReactQueryProvider } from "@/contexts/ReactQuery";
import { useStore } from "@/store";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate as PersistGateClient } from "redux-persist/integration/react";

export function AppProviders({ children, locale, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, () => persistor.persist());

  return (
    <Provider store={store}>
      <PersistGateClient persistor={persistor}>
        <ReactQueryProvider pageProps={pageProps}>
          {children}
        </ReactQueryProvider>
      </PersistGateClient>
    </Provider>
  );
}

AppProviders.propTypes = {
  children: PropTypes.any,
  pageProps: PropTypes.any,
};
