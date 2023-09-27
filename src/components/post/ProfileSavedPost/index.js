import { useRouter } from 'next/router'
import { useState } from 'react'

import { Link } from '@/components/base'
import { useIsMe } from '@/hooks/custom'
import { cn } from '@/utils'

import CreateCollectionSection from './CreateCollectionSection'
import s from './styles.module.css'

const CollectionItem = ({ name }) => {
  return (
    <Link href="/" disabled={name}>
      <div
        className={cn(
          s['collection-item-bg'],
          'h-[300px] w-[300px]',
          'rounded-md border border-divide',
          'cursor-pointer',
          'flex justify-items-end'
        )}
      >
        <span className="mt-auto pb-4 pl-4 text-xl font-medium text-white">{name}</span>
      </div>
    </Link>
  )
}

const ProfileSavedPost = () => {
  const router = useRouter()
  const isMe = useIsMe(router.query?.username)

  const [collection, setCollection] = useState([])

  const renderCollectionItem = (item) => <CollectionItem key={item.name} name={item.name} />

  return (
    <div className="flex flex-1 flex-col items-center gap-y-4">
      {isMe && <CreateCollectionSection setCollection={setCollection} />}
      <div className="flex max-w-[300px] flex-wrap gap-4 md:max-w-[616px] min-[1280px]:max-w-full">
        <CollectionItem name="All Posts" />
        {collection.map(renderCollectionItem)}
      </div>
    </div>
  )
}

export default ProfileSavedPost
