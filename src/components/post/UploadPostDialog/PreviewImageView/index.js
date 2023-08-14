import Image from 'next/image'

import { XIcon } from '@/components/icons'
import Assets from '@/constants/Assets'
import { cn } from '@/utils'

const PreviewImageView = ({ previewImage, step, handleRemoveImage }) => {
  return (
    <div
      className={cn(
        'relative z-50 shrink-0',
        'w-[50vw] min-w-[348px] max-w-[590px] md:w-[80vw]',
        'transition-all duration-500',
        step === 3 && 'md:w-[50vw] md:max-w-[648px]'
      )}
    >
      <Image
        fill
        src={previewImage || Assets.COMMON.PLACEHOLDER}
        alt="Preview image"
        className={cn(
          'object-cover transition-all duration-500',
          step === 3 ? 'rounded-bl-xl' : 'rounded-b-xl'
        )}
      />
      <button
        className="absolute bottom-3 right-3 z-50
            flex h-7 w-7
            cursor-pointer items-center justify-center
            rounded-full bg-black
            text-white hover:opacity-80"
        type="button"
        onClick={handleRemoveImage}
      >
        <XIcon size={18} />
      </button>
    </div>
  )
}

export default PreviewImageView
