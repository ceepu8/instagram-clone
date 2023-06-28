import Dialog, { DialogContent } from '@/components/base/Dialog'
import { UploadImageFileIcon } from '@/components/icons'
import usePostDialog from '@/hooks/custom/usePostDialog'

const UploadPostDialog = () => {
  const { isOpen, onClose, onOpen } = usePostDialog()
  return (
    <Dialog isOpen={isOpen} onClose={onClose || onOpen}>
      <DialogContent title="Create new post">
        <form className="h-[300px] sm:h-[475px] md:h-[575px] flex flex-col items-center justify-center space-y-4 text-base">
          <UploadImageFileIcon width={96} height={77} />
          <h2 className="text-xl">Drag photos and videos here</h2>
          <label
            htmlFor="file"
            className="h-[32px] text-sm cursor-pointer focus:outline-none flex items-center justify-center gap-x-2 rounded-lg text-white font-bold bg-btn-primary hover:bg-btn-primary-hover disabled:cursor-default disabled:bg-very-light-azure w-fit px-3"
          >
            Select from computer
          </label>
          <input id="file" type="file" className="hidden" />
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default UploadPostDialog
