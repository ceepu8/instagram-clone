import UploadPostDialog from '@/components/post/UploadPostDialog'

const DialogProvider = ({ children }) => {
  return (
    <>
      <UploadPostDialog />
      {children}
    </>
  )
}

export default DialogProvider
