import { Pressable } from '@react-aria/interactions'
import { useTheme } from 'next-themes'

import { Button, LineBreak, Switch } from '@/components/base'
import { ChevronLeft, Moon, Sun } from '@/components/icons'
import { DARK_THEME, LIGHT_THEME } from '@/constants'
import { POPOVER_MENU_KEYS } from '@/constants/Keys'

const SwitchAppearance = (props) => {
  const { setMenu } = props || {}

  const { theme, setTheme } = useTheme()
  const isDarkTheme = theme === DARK_THEME

  const handleThemeToggle = () => {
    setTheme(isDarkTheme ? LIGHT_THEME : DARK_THEME)
  }

  const renderThemeSwitch = () => {
    return (
      <Pressable onPress={handleThemeToggle}>
        <div className="p-4 hover:bg-nav-menu-item rounded-lg cursor-pointer">
          <Switch
            label="Dark mode"
            checked={isDarkTheme}
            onChange={handleThemeToggle}
            labelStyle="text-sm"
            rootStyle="ml-auto w-[26px] h-[16px] border-[1.5px]"
            thumbStyle="w-[13.5px] h-[13.5px] group-radix-state-checked:translate-x-[10px]"
          />
        </div>
      </Pressable>
    )
  }

  return (
    <div>
      <div className="flex items-center gap-x-2 px-2 py-1">
        <Button
          variant="text-secondary"
          icon={ChevronLeft}
          size="small"
          onClick={() => setMenu(POPOVER_MENU_KEYS.MAIN)}
        />
        <h1 className="font-semibold mr-auto">Switch Appearance</h1>
        {isDarkTheme ? <Moon width={16.5} height={16.5} /> : <Sun width={16.5} height={16.5} />}
      </div>
      <LineBreak className="bg-popover-divide" />
      {renderThemeSwitch()}
    </div>
  )
}

export default SwitchAppearance
