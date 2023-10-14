import { Pressable } from '@react-aria/interactions'
import { queryTypes, useQueryState } from 'next-usequerystate'
import { useRouter } from 'next/router'

import { useGetProfile } from '@/apis'
import { LineBreak } from '@/components/base'
import { BookmarkIcon, Film, GridIcon, TagIcon } from '@/components/icons'
import { PROFILE_TAB_KEYS } from '@/constants/Keys'
import { useIsMe } from '@/hooks/custom'
import { cn } from '@/utils'

const ProfileTabs = () => {
  const [tab, setTab] = useQueryState('tab', queryTypes.string.withDefault(PROFILE_TAB_KEYS.POSTS))

  const router = useRouter()
  const { data: user } = useGetProfile(router.query.username)
  const isMe = useIsMe(user?.username)

  const tabList = [
    {
      active: !tab || tab === PROFILE_TAB_KEYS.POSTS,
      icon: GridIcon,
      label: PROFILE_TAB_KEYS.POSTS,
      isShow: true,
    },
    {
      active: tab === PROFILE_TAB_KEYS.REELS,
      icon: Film,
      label: PROFILE_TAB_KEYS.REELS,
      isShow: !isMe && user?.reels?.length > 0,
    },
    {
      active: tab === PROFILE_TAB_KEYS.SAVED,
      icon: BookmarkIcon,
      label: PROFILE_TAB_KEYS.SAVED,
      isShow: isMe,
    },
    {
      active: tab === PROFILE_TAB_KEYS.TAGGED,
      icon: TagIcon,
      label: PROFILE_TAB_KEYS.TAGGED,
      isShow: true,
    },
  ]

  const renderItem = (item) => {
    const { active, icon: Icon, label, isShow } = item
    if (!isShow) {
      return null
    }
    return (
      <Pressable key={label} onPress={() => setTab(label)}>
        <div
          className={cn(
            'flex-center space-x-1 py-2 sm:py-6',
            'cursor-pointer text-xs font-bold tracking-wide text-comment',
            'border-t border-transparent',
            'flex-1 sm:flex-initial',
            active && 'border-default text-default'
          )}
        >
          <Icon className={cn('sm:h-4 sm:w-4', active && 'text-primary sm:text-default')} />
          <span className="hidden uppercase sm:block">{label}</span>
        </div>
      </Pressable>
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
