import { UploadPostDialog } from '@/components/post'

const DialogProvider = ({ children }) => {
  return (
    <>
      <UploadPostDialog />
      {children}
    </>
  )
}

export default DialogProvider
