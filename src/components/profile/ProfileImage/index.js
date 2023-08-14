import Image from 'next/image'

import Assets from '@/constants/Assets'

const ProfileImage = ({ image }) => {
  return (
    <div className="mr-8 shrink-0 sm:mr-0 sm:flex-grow-[1] sm:basis-0">
      <div className="relative mx-auto h-[70px] w-[70px] sm:h-[150px] sm:w-[150px]">
        <Image
          className="rounded-full border border-chinese-silver"
          fill
          src={image || Assets.COMMON.PLACEHOLDER}
          alt="Profile Image"
        />
      </div>
    </div>
  )
}

export default ProfileImage
