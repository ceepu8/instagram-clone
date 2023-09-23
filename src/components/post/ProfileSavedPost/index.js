import { Plus, Save } from 'lucide-react'
import { useRouter } from 'next/router'

import { Button } from '@/components/base'
import { useIsMe } from '@/hooks/custom'
import { cn } from '@/utils'

import s from './styles.module.css'

// TODO:
const CreateCollectionSection = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <p className="text-xs text-comment">Only you can see what you&apos;ve saved</p>
      <Button variant="link" className="shrink-0">
        <Plus size={12} />
        New Collection
      </Button>
    </div>
  )
}

const CollectionItem = ({ name }) => {
  return (
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
  )
}

const ProfileSavedPost = () => {
  const router = useRouter()
  const isMe = useIsMe(router.query?.username)

  const data = []

  return (
    <div className="flex flex-1 flex-col items-center gap-y-4">
      {isMe && <CreateCollectionSection />}
      <div className="flex max-w-[300px] flex-wrap gap-4 md:max-w-[616px] lg:max-w-full">
        <CollectionItem name="All Posts" />
        <CollectionItem name="123" />
        <CollectionItem name="123" />
        <CollectionItem name="123" />
      </div>
    </div>
  )
}

export default ProfileSavedPost
