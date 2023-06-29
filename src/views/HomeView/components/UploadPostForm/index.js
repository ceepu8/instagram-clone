import { UploadImageFileIcon } from '@/components/icons'

const UploadPostForm = ({ handleImageChange }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-base">
      <UploadImageFileIcon width={96} height={77} />
      <h2 className="text-xl">Drag photos and videos here</h2>
      <label
        htmlFor="file"
        className="h-[32px] text-sm cursor-pointer focus:outline-none flex items-center justify-center gap-x-2 rounded-lg text-white font-bold bg-btn-primary hover:bg-btn-primary-hover disabled:cursor-default disabled:bg-very-light-azure w-fit px-3"
      >
        Select from computer
      </label>
      <input id="file" type="file" className="hidden" onChange={handleImageChange} />
    </div>
  )
}

export default UploadPostForm
