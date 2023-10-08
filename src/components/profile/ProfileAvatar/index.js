import Image from 'next/image'
import { forwardRef } from 'react'

import Assets from '@/constants/Assets'

const ProfileAvatar = forwardRef(({ image, size = 20, className, ...props }, ref) => {
  return (
    <div className={className} ref={ref} {...props}>
      <Image
        width={size}
        height={size}
        className="rounded-full border border-chinese-silver object-cover"
        src={image || Assets.COMMON.PLACEHOLDER}
        alt="Profile Image"
      />
    </div>
  )
})

export default ProfileAvatar
