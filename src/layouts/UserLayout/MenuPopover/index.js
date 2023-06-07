import MainMenu from './MainMenu'
import SwitchAppearance from './SwitchAppearance'
import { Button } from '@/components/base'
import Popover from '@/components/base/Popover'
import { Menu } from '@/components/icons'
import { POPOVER_MENU_KEYS } from '@/constants/Keys'
import cn from 'classnames'
import { useState } from 'react'

const PopoverContent = () => {
  const [menu, setMenu] = useState(POPOVER_MENU_KEYS.MAIN_KEYS)

  return (
    <div>
      {menu === POPOVER_MENU_KEYS.MAIN_KEYS && <MainMenu setMenu={setMenu} />}
      {menu === POPOVER_MENU_KEYS.SWITCH_APPEARANCE_KEY && <SwitchAppearance setMenu={setMenu} />}
      {/* ... if more other popovers */}
    </div>
  )
}

const MenuPopover = () => {
  const triggerBtnStyle = cn(
    'group',
    'px-3 gap-x-2 justify-start hover:bg-nav-hover p-3 rounded-lg cursor-pointer',
    'radix-state-open:font-bold'
  )

  const trigger = (
    <Button icon={Menu} size="large" rootClassName={triggerBtnStyle} fullWidth>
      More
    </Button>
  )

  return (
    <Popover trigger={trigger}>
      <PopoverContent />
    </Popover>
  )
}

export default MenuPopover
