import { Pressable } from '@react-aria/interactions'
import { useState } from 'react'

import { Button } from '@/components/base'
import Popover from '@/components/base/Popover'
import { Menu } from '@/components/icons'
import { POPOVER_MENU_KEYS } from '@/constants/Keys'
import { cn } from '@/utils'

import MainMenu from './MainMenu'
import SwitchAppearance from './SwitchAppearance'

const PopoverContent = () => {
  const [menu, setMenu] = useState(POPOVER_MENU_KEYS.MAIN)

  return (
    <div>
      {menu === POPOVER_MENU_KEYS.MAIN && <MainMenu setMenu={setMenu} />}
      {menu === POPOVER_MENU_KEYS.SWITCH_APPEARANCE && <SwitchAppearance setMenu={setMenu} />}
      {/* ... if more other popovers */}
    </div>
  )
}

const MenuPopover = ({ sideBarActive }) => {
  const trigger = (
    <div
      className={cn(
        'flex items-center gap-x-4 hover:bg-nav-hover font-medium p-3 rounded-lg cursor-pointer text-md transition-all duration-300 w-full',
        {
          'w-fit': sideBarActive,
        }
      )}
    >
      <Menu width={25} height={25} />
      {!sideBarActive && 'More'}
    </div>
  )

  return (
    <Popover trigger={trigger} contentClassName="w-[266px] z-50">
      <PopoverContent />
    </Popover>
  )
}

export default MenuPopover
