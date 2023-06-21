import Image from 'next/image'

import PhoneScreenSlideShow from '../components/PhoneScreenSlideShow'

const LoginBanner = () => {
  return (
    <div className="hidden md:block relative shrink-0">
      <Image width={480} height={640} src="/phones.png" alt="Phone" />
      <PhoneScreenSlideShow />
    </div>
  )
}

export default LoginBanner
