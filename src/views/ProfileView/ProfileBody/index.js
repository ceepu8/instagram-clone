import { useRouter } from 'next/router'

import { LineBreak } from '@/components/base'
import { GridIcon, TagIcon } from '@/components/icons'
import { PROFILE_TAB_KEYS } from '@/constants/Keys'
import { useAuth } from '@/hooks/query/auth'
import { cn } from '@/utils'

import PostList from './PostList'

const ProfileTabs = () => {
  const router = useRouter()
  const { user } = useAuth()

  const tabList = [
    {
      key: PROFILE_TAB_KEYS.posts,
      href: `/profile/${user?.id}?tab=${PROFILE_TAB_KEYS.posts}`,
      active: !router.query?.tab || router.query?.tab === PROFILE_TAB_KEYS.posts,
      icon: GridIcon,
      label: PROFILE_TAB_KEYS.posts,
    },
    {
      key: PROFILE_TAB_KEYS.tagged,
      href: `/profile/${user?.id}?tab=${PROFILE_TAB_KEYS.tagged}`,
      active: router.query?.tab === PROFILE_TAB_KEYS.tagged,
      icon: TagIcon,
      label: PROFILE_TAB_KEYS.tagged,
    },
  ]

  return (
    <div className="relative h-[41px] sm:h-[49px]">
      <LineBreak className="my-0" />
      <div className="flex justify-center sm:space-x-16 absolute inset-0">
        {tabList.map((tab) => {
          const { key, href, active, icon: Icon, label } = tab
          return (
            <button
              key={key}
              type="button"
              onClick={() => router.replace(href, undefined, { scroll: false })}
              className={cn(
                'flex items-center justify-center space-x-1 py-2 sm:py-6',
                'text-xs text-comment tracking-wide font-bold',
                'border-t border-transparent',
                'flex-1 sm:flex-initial',
                active && 'border-base'
              )}
            >
              <Icon className={cn('sm:w-4 sm:h-4', active && 'text-primary sm:text-base')} />
              <span className="uppercase hidden sm:block">{label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

const ProfileBody = () => {
  return (
    <div className="sm:px-4 flex flex-col h-full">
      <ProfileTabs />
      <div className="flex-1">
        <PostList />
      </div>
    </div>
  )
}

export default ProfileBody
