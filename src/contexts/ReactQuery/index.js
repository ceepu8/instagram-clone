import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

import { DEBUG } from '@/constants'

const RQ_DEFAULT_QUERIES_OPTIONS = {
  refetchOnWindowFocus: false,
  staleTime: 5000,
}

export const ReactQueryProvider = ({ children, pageProps = {} }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: RQ_DEFAULT_QUERIES_OPTIONS,
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
      {/* {DEBUG && <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />} */}
    </QueryClientProvider>
  )
}
