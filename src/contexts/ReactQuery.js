import { DEBUG } from '@/constants'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

const RQ_DEFAULT_QUERIES_OPTIONS = {
  refetchOnWindowFocus: false,
  staleTime: 5000,
}

const ReactQueryProvider = ({ children }) => {
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
      <>{children}</>
      {DEBUG && <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />}
    </QueryClientProvider>
  )
}

export { RQ_DEFAULT_QUERIES_OPTIONS, ReactQueryProvider }
