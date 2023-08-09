import Image from 'next/image'

import Assets from '@/constants/Assets'

const ProfileImage = ({ image }) => {
  return (
    <div className="sm:flex-grow-[1] sm:basis-0 shrink-0 mr-8 sm:mr-0">
      <div className="w-[70px] h-[70px] sm:w-[150px] sm:h-[150px] relative mx-auto">
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
