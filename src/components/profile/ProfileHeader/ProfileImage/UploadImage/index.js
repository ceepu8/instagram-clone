import { useRef } from 'react'

import { DEFAULT_ACCEPTED_FILE_TYPES } from '@/constants'
import { cn } from '@/utils'

const UploadImage = ({
  children,
  handleImageChange,
  accept = DEFAULT_ACCEPTED_FILE_TYPES,
  className,
}) => {
  const fileInputRef = useRef(null)

  return (
    <div className={cn('h-full w-full text-center', className)}>
      <div
        onClick={() => fileInputRef.current.click()}
        className="h-full w-full"
        role="presentation"
      >
        {children}
      </div>
      <input
        id="file"
        ref={fileInputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  )
}

export default UploadImage
