import Image from 'next/image'

import PhoneScreenSlideShow from '../components/PhoneScreenSlideShow'

const LoginBanner = () => {
  return (
    <div className="relative hidden shrink-0 md:block">
      <Image width={480} height={640} src="/phones.png" alt="Phone" />
      <PhoneScreenSlideShow />
    </div>
  )
}

export default LoginBanner
