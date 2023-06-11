import { isEmpty } from 'lodash'
import { useState } from 'react'

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

const MenuPopover = ({ navSelected }) => {
  const trigger = (
    <div
      className={cn(
        'flex items-center gap-x-4 hover:bg-nav-hover font-medium p-3 rounded-lg cursor-pointer text-md transition-all duration-300 w-full'
      )}
    >
      <Menu width={25} height={25} className="shrink-0" />
      <span
        className={cn('visible opacity-100 duration-[100ms] delay-[50ms] transition-all', {
          'invisible opacity-0': !isEmpty(navSelected),
        })}
      >
        {!navSelected && 'More'}
      </span>
    </div>
  )

  return (
    <Popover trigger={trigger} contentClassName="w-[266px] z-50">
      <PopoverContent />
    </Popover>
  )
}

export default MenuPopover
