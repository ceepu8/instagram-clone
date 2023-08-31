import Image from 'next/image'

import { CopyIcon } from '@/components/icons'
import { cn } from '@/utils'

const ProfilePostItem = ({ images, isMultipleImages }) => {
  return (
    <div className="relative cursor-pointer">
      <div className="relative aspect-square">
        <Image fill src={images[0]} alt="post image" className="object-cover" />
      </div>
      <CopyIcon
        size={24}
        className={cn('absolute right-2 top-2 text-white', isMultipleImages ? 'block' : 'hidden')}
      />
    </div>
  )
}

export default ProfilePostItem
