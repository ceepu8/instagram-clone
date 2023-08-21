import Image from 'next/image'

import Assets from '@/constants/Assets'
import { cn } from '@/utils'

const ProfileAvatar = ({ image, size, ...props }) => {
  const variantSize = {
    xs: 'w-[32px] h-[32px]',
    sm: 'w-[44px] h-[44px]',
    md: 'w-[56px] h-[56px]',
  }

  return (
    <div className="shrink-0" {...props}>
      <div className={cn('relative mx-auto', variantSize[size])}>
        <Image
          fill
          className="rounded-full border border-chinese-silver"
          src={image || Assets.COMMON.PLACEHOLDER}
          alt="Profile Image"
        />
      </div>
    </div>
  )
}

export default ProfileAvatar
