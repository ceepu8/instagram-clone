import { Fade } from 'react-slideshow-image'

import Slideshow from '../Slideshow'

const PhoneScreenSlideShow = () => {
  const fadeImages = [
    {
      url: '/slide-show-1.png',
      caption: 'First Slide',
    },
    {
      url: '/slide-show-2.png',
      caption: 'Second Slide',
    },
    {
      url: '/slide-show-3.png',
      caption: 'Third Slide',
    },
    {
      url: '/slide-show-4.png',
      caption: 'Third Slide',
    },
  ]

  return (
    <Slideshow
      items={fadeImages}
      show={Fade}
      duration={5000}
      arrows={false}
      rootClass="absolute top-6 right-[60px]"
      width={260}
    />
  )
}

export default PhoneScreenSlideShow
