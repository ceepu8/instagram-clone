import { Button, LineBreak } from '@/components/base'
import { Switch } from '@/components/shared'
import { DARK_THEME, LIGHT_THEME, MAIN_KEYS } from '@/constants'
import { Pressable } from '@react-aria/interactions'
import { ChevronLeft } from 'lucide-react'
import { useTheme } from 'next-themes'

const SwitchAppearance = (props) => {
  const { setMenu } = props || {}

  const { theme, setTheme } = useTheme()

  const onToggle = (checked) => {
    const newTheme = checked ? DARK_THEME : LIGHT_THEME
    setTheme(newTheme)
  }

  const handleThemeToggle = () => {
    setTheme(theme === DARK_THEME ? LIGHT_THEME : DARK_THEME)
  }

  const renderThemeSwitch = () => {
    return (
      <Pressable onPress={handleThemeToggle}>
        <div className="p-4 hover:bg-nav-menu-item rounded-lg cursor-pointer">
          <Switch
            label="Dark mode"
            checked={theme === DARK_THEME}
            onChange={onToggle}
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
          onClick={() => setMenu(MAIN_KEYS)}
        />
        <h1 className="text-lg font-semibold">Switch Appearance</h1>
      </div>
      <LineBreak className="bg-popover-divide" />
      {renderThemeSwitch()}
    </div>
  )
}

export default SwitchAppearance
