import { Pressable } from '@react-aria/interactions'

import { Plus } from '@/components/icons'

const ProfileStoryAddButton = () => {
  return (
    <Pressable onPress={() => {}}>
      <div className="flex w-[72.5px] shrink-0 cursor-pointer  flex-col items-center justify-center space-y-1 overflow-auto py-1 md:w-[115px]">
        <div className="h-14 w-14 rounded-full border-[0.5px] border-story-line p-0.5 md:h-[79px] md:w-[79px]">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-story-item-bg">
            <Plus size={44} className="text-story-line" />
          </div>
        </div>
        <p className="text-center text-xs font-bold">New</p>
      </div>
    </Pressable>
  )
}

export default ProfileStoryAddButton
