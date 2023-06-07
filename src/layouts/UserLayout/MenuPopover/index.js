import MainMenu from './MainMenu'
import SwitchAppearance from './SwitchAppearance'
import { Button } from '@/components/base'
import Popover from '@/components/base/Popover'
import { MAIN_KEYS, SWITCH_APPEARANCE_KEY } from '@/constants'
import cn from 'classnames'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const PopoverContent = () => {
  const [menu, setMenu] = useState(MAIN_KEYS)

  return (
    <div>
      {menu === MAIN_KEYS && <MainMenu setMenu={setMenu} />}
      {menu === SWITCH_APPEARANCE_KEY && <SwitchAppearance setMenu={setMenu} />}
      {/* ... if more other popovers */}
    </div>
  )
}

const MenuPopover = () => {
  const triggerBtnStyle = cn(
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
