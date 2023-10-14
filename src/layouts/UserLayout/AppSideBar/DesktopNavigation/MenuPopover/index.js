import { useState } from 'react'

import Popover from '@/components/base/Popover'
import { MenuIcon } from '@/components/icons'
import { MENU_NAV_TYPES } from '@/constants'
import { POPOVER_MENU_KEYS, SIDEBAR_MENU_KEYS } from '@/constants/Keys'

import NavItem from '../NavItem'
import MainMenu from './MainMenu'
import SwitchAppearance from './SwitchAppearance'

const MenuPopover = ({ panel }) => {
  const [menu, setMenu] = useState(POPOVER_MENU_KEYS.MAIN)
  const [openPopover, setOpenPopover] = useState(false)

  const item = {
    name: SIDEBAR_MENU_KEYS.MORE,
    icon: MenuIcon,
    onPress: () => setOpenPopover(true),
    label: 'More',
    type: MENU_NAV_TYPES.TRIGGER,
  }

  const trigger = <NavItem as="div" active={openPopover} panelTriggered={panel} item={item} />

  return (
    <Popover
      open={openPopover}
      onOpenChange={setOpenPopover}
      trigger={trigger}
      contentClassName="w-[266px] z-50"
    >
      <div>
        {menu === POPOVER_MENU_KEYS.MAIN && <MainMenu setMenu={setMenu} />}
        {menu === POPOVER_MENU_KEYS.SWITCH_APPEARANCE && <SwitchAppearance setMenu={setMenu} />}
        {/* ... if more other popovers */}
      </div>
    </Popover>
  )
}

export default MenuPopover
