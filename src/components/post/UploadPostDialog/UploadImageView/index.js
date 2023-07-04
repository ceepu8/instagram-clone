import { UploadImageFileIcon } from '@/components/icons'
import { cn } from '@/utils'

const UploadImageView = ({ handleImageChange }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-base">
      <UploadImageFileIcon width={96} height={77} />
      <h2 className="text-xl">Drag photos and videos here</h2>
      <label
        htmlFor="file"
        className={cn(
          'h-[32px] w-fit flex items-center justify-center px-3 gap-x-2',
          'text-sm text-white font-bold',
          'bg-btn-primary hover:bg-btn-primary-hover rounded-lg',
          'cursor-pointer focus:outline-none disabled:cursor-default disabled:bg-very-light-azure'
        )}
      >
        Select from computer
      </label>
      <input id="file" type="file" className="hidden" onChange={handleImageChange} />
    </div>
  )
}

export default UploadImageView
