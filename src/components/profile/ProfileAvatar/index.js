import Image from 'next/image'
import { forwardRef } from 'react'

import Assets from '@/constants/Assets'
import { cn } from '@/utils'

const ProfileAvatar = forwardRef(
  ({ image, size = 20, hasBorder, className, active, ...props }, ref) => {
    return (
      <div className={('aspect-[1/1]', className)} ref={ref} {...props}>
        <Image
          width={size}
          height={size}
          className={cn(
            'aspect-[1/1] rounded-full border border-chinese-silver object-cover',
            active && 'border-[2px] border-default'
          )}
          src={image || Assets.COMMON.PLACEHOLDER}
          alt="Profile Image"
        />
      </div>
    )
  }
)

export default ProfileAvatar
