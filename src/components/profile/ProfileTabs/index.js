import { useRouter } from 'next/router'

import { useGetProfile } from '@/api'
import { LineBreak } from '@/components/base'
import { GridIcon, TagIcon } from '@/components/icons'
import { Routes } from '@/constants'
import { PROFILE_TAB_KEYS } from '@/constants/Keys'
import { cn } from '@/utils'

const ProfileTabs = () => {
  const router = useRouter()
  const { data: user } = useGetProfile(router.query.id)

  const tabList = [
    {
      key: PROFILE_TAB_KEYS.posts,
      active: !router.query?.tab || router.query?.tab === PROFILE_TAB_KEYS.posts,
      icon: GridIcon,
      label: PROFILE_TAB_KEYS.posts,
    },
    {
      key: PROFILE_TAB_KEYS.tagged,
      active: router.query?.tab === PROFILE_TAB_KEYS.tagged,
      icon: TagIcon,
      label: PROFILE_TAB_KEYS.tagged,
    },
  ]

  const changeTab = (tabQuery) =>
    router.replace(
      {
        pathname: Routes.PROFILE.replace('[id]', user?.username),
        query: {
          tab: tabQuery,
        },
      },
      undefined,
      { scroll: false }
    )

  return (
    <div className="relative h-[41px] sm:h-[49px] sm:px-4">
      <LineBreak className="my-0" />
      <div className="absolute inset-0 flex justify-center sm:space-x-16">
        {tabList.map((tab) => {
          const { key, active, icon: Icon, label } = tab

          return (
            <button
              key={key}
              type="button"
              onClick={() => changeTab(key)}
              className={cn(
                'flex items-center justify-center space-x-1 py-2 sm:py-6',
                'text-xs font-bold tracking-wide text-comment',
                'border-t border-transparent',
                'flex-1 sm:flex-initial',
                active && 'border-base'
              )}
            >
              <Icon className={cn('sm:h-4 sm:w-4', active && 'text-primary sm:text-base')} />
              <span className="hidden uppercase sm:block">{label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ProfileTabs
