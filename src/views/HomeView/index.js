import { HoverCard } from '@/components/base'
import Button from '@/components/base/Button'
import { FacebookMessengerIcon } from '@/components/icons'
import { Post, Switch } from '@/components/shared'
import { HeartIcon, MessageCircle, Send, Smile } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const HomeView = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="dark:text-white">
      <div className="flex">
        <div className="max-w-[var(--feed-width-post)] mx-auto">
          <div className="text-center divide-y-[1px] divide-divide">
            <Post />
            <Post />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default HomeView
