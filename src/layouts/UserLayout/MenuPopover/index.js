import clsx from 'clsx'
import { useState } from 'react'

import { Button } from '@/components/base'
import Popover from '@/components/base/Popover'
import { Menu } from '@/components/icons'
import { POPOVER_MENU_KEYS } from '@/constants/Keys'

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

const MenuPopover = () => {
  const triggerBtnStyle = clsx(
    'group',
    'px-3 gap-x-4 mb-4 justify-start hover:bg-nav-hover p-3 rounded-lg cursor-pointer',
    'radix-state-open:font-bold'
  )

  const trigger = (
    <Button icon={Menu} rootClassName={triggerBtnStyle} iconClassName="w-[25px] h-[25px]" fullWidth>
      More
    </Button>
  )

  return (
    <Popover trigger={trigger} contentClassName="w-[266px]">
      <PopoverContent />
    </Popover>
  )
}

export default MenuPopover
