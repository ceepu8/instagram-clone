import Button from '@/components/base/Button'
import { Switch } from '@/components/shared'
import { HeartIcon, MessageCircle, Send, Smile } from 'lucide-react'
import { useTheme } from 'next-themes'

const AppSideBar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <Switch
        label="Dark mode"
        onChange={(checked) => {
          const _theme = checked ? 'dark' : 'light'
          setTheme(_theme)
        }}
      />
      <div className="flex flex-col gap-y-4">
        <div className="flex">
          <Button variant="text" size="small">
            Hello Tist
          </Button>
          <Button variant="text">Hello Tist</Button>
          <Button variant="text" size="large">
            Hello Tist
          </Button>
        </div>
        <div className="flex">
          <Button variant="icon" Icon={HeartIcon} />
          <Button variant="icon" Icon={MessageCircle} />
          <Button variant="icon" Icon={Send} />
          <Button variant="icon" size="small" Icon={Smile} />
        </div>

        <div className="flex">
          <Button variant="text-only" size="small">
            Follow
          </Button>
          <Button variant="text-only" size="medium">
            Follow
          </Button>
          <Button variant="text-only" size="large">
            Follow
          </Button>
        </div>

        <div className="flex">
          <p className="text-comment">View all comment</p>
        </div>

        <div>
          <span className="text-footer text-xs">© 2023 INSTAGRAM FROM META</span>
        </div>
      </div>
    </div>
  )
}

export default AppSideBar
