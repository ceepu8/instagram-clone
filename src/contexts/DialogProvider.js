import { useEffect, useState } from 'react'

import UploadPostDialog from '@/components/post/UploadPostDialog'

const DialogProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return <UploadPostDialog />
}

export default DialogProvider
