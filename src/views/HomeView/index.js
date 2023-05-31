import Button from '@/components/base/Button'
import { FacebookMessengerIcon } from '@/components/icons'
import { Switch } from '@/components/shared'
import { HeartIcon, MessageCircle, Send, Smile } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

const HomeView = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="dark:text-white">
      <Switch
        label="Dark mode"
        onChange={(checked) => {
          const _theme = checked ? 'dark' : 'light'
          setTheme(_theme)
        }}
      />
      <div className="flex flex-col gap-y-4">
        <div className="flex space-x-3">
          <Button variant="primary" size="small">
            Hello Tist
          </Button>
          <Button variant="primary">Hello Tist</Button>
          <Button variant="primary" size="large">
            Hello Tist
          </Button>
        </div>

        <div className="flex space-x-4">
          <Button variant="secondary" size="small">
            Hello Tist
          </Button>
          <Button variant="secondary">Hello Tist</Button>
          <Button variant="secondary" size="large">
            Hello Tist
          </Button>
        </div>

        <div className="flex space-x-4">
          <Button variant="text-secondary" icon={HeartIcon} iconOnly />
          <Button variant="text-secondary" icon={MessageCircle} iconOnly />
          <Button variant="text-secondary" icon={Send} iconOnly />
          <Button variant="text-secondary" size="extra-small" icon={Smile} iconOnly />
        </div>

        <div className="flex space-x-4">
          <Button variant="text-primary" size="large" icon={HeartIcon} iconOnly />
          <Button variant="text-primary" size="large" icon={MessageCircle} iconOnly />
          <Button variant="text-primary" size="large" icon={Send} iconOnly />
          <Button variant="text-primary" size="small" icon={Smile} iconOnly />
        </div>

        <div className="flex space-x-4">
          <Button variant="primary" icon={FacebookMessengerIcon} fullWidth>
            Message
          </Button>
          <Button variant="secondary">Following</Button>
        </div>

        <Button variant="primary" icon={FacebookMessengerIcon} fullWidth>
          Message
        </Button>
        <Button variant="secondary">Following</Button>

        <div className="flex">
          <Button variant="text-primary" size="small">
            Follow
          </Button>
          <Button variant="text-primary" size="medium">
            Follow
          </Button>
          <Button variant="text-primary" size="large">
            Follow
          </Button>
        </div>

        <div className="flex">
          <Button variant="text-secondary" size="small">
            Follow
          </Button>
          <Button variant="text-secondary" size="medium">
            Follow
          </Button>
          <Button variant="text-secondary" size="large">
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

export default HomeView
