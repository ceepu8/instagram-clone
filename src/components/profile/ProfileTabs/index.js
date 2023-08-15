import { useQueryState } from 'next-usequerystate'
import { useRouter } from 'next/router'

import { useGetProfile } from '@/api'
import { LineBreak } from '@/components/base'
import { BookmarkIcon, Film, GridIcon, TagIcon } from '@/components/icons'
import { PROFILE_TAB_KEYS } from '@/constants/Keys'
import { useIsMe } from '@/hooks/custom/useIsMe'
import { cn } from '@/utils'

const ProfileTabs = () => {
  const [tab, setTab] = useQueryState('tab', PROFILE_TAB_KEYS.posts)

  const router = useRouter()
  const { data: user } = useGetProfile(router.query.id)
  const isMe = useIsMe(user?.id)

  const tabList = [
    {
      active: !tab || tab === PROFILE_TAB_KEYS.posts,
      icon: GridIcon,
      label: PROFILE_TAB_KEYS.posts,
      isShow: true,
    },
    {
      active: tab === PROFILE_TAB_KEYS.reels,
      icon: Film,
      label: PROFILE_TAB_KEYS.reels,
      isShow: !isMe,
    },
    {
      active: tab === PROFILE_TAB_KEYS.saved,
      icon: BookmarkIcon,
      label: PROFILE_TAB_KEYS.saved,
      isShow: isMe,
    },
    {
      active: tab === PROFILE_TAB_KEYS.tagged,
      icon: TagIcon,
      label: PROFILE_TAB_KEYS.tagged,
      isShow: true,
    },
  ]

  const renderItem = (item) => {
    const { active, icon: Icon, label, isShow } = item
    if (!isShow) {
      return null
    }
    return (
      <button
        key={label}
        type="button"
        onClick={() => setTab(label)}
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
  }

  return (
    <div className="relative h-[41px] sm:h-[49px] sm:px-4">
      <LineBreak className="my-0" />
      <div className="absolute inset-0 flex justify-center sm:space-x-16">
        {tabList.map(renderItem)}
      </div>
    </div>
  )
}

export default ProfileTabs
