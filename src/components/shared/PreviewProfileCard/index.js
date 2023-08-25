import Image from 'next/image'

import { Button, Link } from '@/components/base'
import { FacebookMessengerIcon } from '@/components/icons'
import ProfileAvatar from '@/components/profile/ProfileAvatar'

const CardFooter = () => {
  return (
    <div className="flex  space-x-2">
      <Button fullWidth size="small" variant="primary">
        <FacebookMessengerIcon />
        Message
      </Button>
      <Button fullWidth size="small" variant="secondary">
        Following
      </Button>
    </div>
  )
}

const CardHeader = () => {
  return (
    <div className="flex items-center gap-x-3">
      <ProfileAvatar size={58} />
      <div className="flex flex-col items-start">
        <h2 className="font-bold leading-5">mirea_03</h2>
        <p className="text-sm leading-5 text-note">Description</p>
      </div>
    </div>
  )
}

const CardUserStatistics = () => {
  return (
    <div className="-mx-4 grid grid-cols-3 items-center justify-between text-sm">
      <div className="flex flex-col items-center">
        <b>1,443</b>
        <span>posts</span>
      </div>
      <div className="flex flex-col items-center">
        <b>4.3M</b>
        <span>followers</span>
      </div>
      <div className="flex flex-col items-center">
        <b>120</b>
        <span>followings</span>
      </div>
    </div>
  )
}

const CardUserPostList = () => {
  const renderItem = (item, index) => {
    return (
      <Link disabled>
        <figure className="relative aspect-square h-[120px] w-[120px] flex-1" key={index}>
          <Image fill src={`/guinea-pig-${index + 1}.jpeg`} alt="post-image" />
        </figure>
      </Link>
    )
  }

  return <div className="-mx-4 flex gap-x-1">{Array(3).fill('').map(renderItem)}</div>
}

const PreviewProfileCard = () => {
  return (
    <div className="flex min-w-[320px] flex-col gap-y-4">
      <CardHeader />
      <CardUserStatistics />
      <CardUserPostList />
      <CardFooter />
    </div>
  )
}

export default PreviewProfileCard
