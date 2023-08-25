import { useState } from 'react'

import Popover from '@/components/base/Popover'
import { MenuIcon } from '@/components/icons'
import { POPOVER_MENU_KEYS, SIDEBAR_MENU_KEYS } from '@/constants/Keys'

import TriggerItem from '../TriggerItem'
import MainMenu from './MainMenu'
import SwitchAppearance from './SwitchAppearance'

const MenuPopover = ({ panel }) => {
  const [menu, setMenu] = useState(POPOVER_MENU_KEYS.MAIN)
  const [openPopover, setOpenPopover] = useState(false)

  const trigger = (
    <div>
      <TriggerItem
        icon={MenuIcon}
        name={SIDEBAR_MENU_KEYS.MORE}
        onPress={() => setOpenPopover(true)}
        label="More"
        active={openPopover}
        hasBorderActive={false}
        panelTriggered={panel}
      />
    </div>
  )

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
