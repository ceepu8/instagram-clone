import { Button, LineBreak } from '@/components/base'
import { ChevronLeft } from '@/components/icons'
import { Switch } from '@/components/shared'
import { DARK_THEME, LIGHT_THEME } from '@/constants'
import { POPOVER_MENU_KEYS } from '@/constants/Keys'
import { Pressable } from '@react-aria/interactions'
import { useTheme } from 'next-themes'

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
            labelStyle="text-base"
            rootStyle="ml-auto w-[32px] h-[19.5px]"
            thumbStyle="w-[16px] h-[16px] group-radix-state-checked:translate-x-[13px]"
          />
        </div>
      </Pressable>
    )
  }

  return (
    <div>
      <div className="flex items-center">
        <Button
          variant="text-secondary"
          icon={ChevronLeft}
          size="small"
          onClick={() => setMenu(POPOVER_MENU_KEYS.MAIN)}
        />
        <h1 className="text-lg font-semibold">Switch Appearance</h1>
      </div>
      <LineBreak className="bg-popover-divide" />
      {renderThemeSwitch()}
    </div>
  )
}

export default SwitchAppearance
