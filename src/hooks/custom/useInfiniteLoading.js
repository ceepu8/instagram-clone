import { useState } from 'react'

export const useInfiniteLoading = () => {
  const [items, setItems] = useState([])

  return { items }
}
