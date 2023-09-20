import { Newspaper, ShieldCheck, User2 } from 'lucide-react'
import { useRouter } from 'next/router'

import { Button, Heading, LineBreak, Link } from '@/components/base'
import { MetaIcon } from '@/components/icons'
import { Footer } from '@/components/layout'
import { Routes } from '@/constants'
import { cn } from '@/utils'

const AccountsCenterSection = () => {
  return (
    <div className="flex flex-col gap-y-2 rounded-xl p-5 text-nickel shadow-55">
      <MetaIcon />
      <Heading as="h2" size="md" className="text-default">
        Accounts Center
      </Heading>
      <p className="text-xs">
        Manage your connected experiences and account settings across Meta technologies.
      </p>
      <ul className="flex flex-col gap-y-2">
        <li className="flex items-center space-x-2">
          <User2 size={18} />
          <span className="text-xs leading-3">Personal Details</span>
        </li>
        <li className="flex items-center space-x-2">
          <ShieldCheck size={18} />
          <span className="text-xs leading-3">Password and Security</span>
        </li>
        <li className="flex items-center space-x-2">
          <Newspaper size={18} />
          <span className="text-xs leading-3">Ad Preferences</span>
        </li>
        <Button variant="link" className="text-left">
          See more in Accounts Center
        </Button>
      </ul>
    </div>
  )
}

const View1 = () => {
  return (
    <Heading bold={false} className="pl-12 pt-8">
      Edit Profile
    </Heading>
  )
}

const View2 = () => {
  return (
    <Heading bold={false} className="pl-12 pt-8">
      Language Preferences
    </Heading>
  )
}

const AccountFAQ = () => {
  const router = useRouter()
  const faqList = [
    {
      key: 'edit-profile',
      label: 'Edit Profle',
    },
    {
      key: 'language-preferences',
      label: 'Language Preferences',
    },
    {
      key: 'apps-and-websites',
      label: 'Apps and websites',
    },
    {
      key: 'email-notifications',
      label: 'Email Notifications',
    },
    {
      key: 'push-notifications',
      label: 'Push Notifications',
    },
    {
      key: 'what-you-see',
      label: 'What you see',
    },
    {
      key: 'who-can-see-your-content',
      label: 'Who can see your content',
    },
    {
      key: 'how-others-can-interact-with-you',
      label: 'How others can interact with you',
    },
    { key: 'supervision', label: 'Supervision' },
    { key: 'help', label: 'Help' },
  ]

  const renderItem = (item) => {
    const active = !router.query.tab ? item.key === 'edit-profile' : item.key === router.query.tab
    const href = `${Routes.ACCOUNT_EDIT}?tab=${item.key}`
    return (
      <li key={item.key}>
        <Link
          href={href}
          className={cn(
            'block cursor-pointer rounded-lg px-5 py-3 hover:bg-bright-gray',
            active && 'bg-bright-gray hover:bg-gainsboro'
          )}
        >
          <span className="text-sm text-default">{item.label}</span>
        </Link>
      </li>
    )
  }
  return (
    <div className="md:px-4">
      <Heading size="xl" className="mb-4 pl-4">
        Settings
      </Heading>
      <ul className="flex flex-col">{faqList.map(renderItem)}</ul>
      <Button variant="link" className="mt-4 pl-4 text-left">
        Switch to professional account
      </Button>
    </div>
  )
}

const AccountEditPage = () => {
  const router = useRouter()

  const faqList = {
    'edit-profile': {
      key: 'edit-profile',
      label: 'Edit Profle',
      component: View1,
    },
    'language-preferences': {
      key: 'language-preferences',
      label: 'Language Preferences',
      component: View2,
    },
  }

  const Component = !router.query.tab
    ? faqList['edit-profile'].component
    : faqList[router.query.tab].component

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-full w-full pt-4">
        <div className="flex w-[235px] flex-col gap-y-4 overflow-y-auto pl-5 pr-2 pt-2 md:w-[315px] md:pr-5">
          <AccountsCenterSection />
          <AccountFAQ />
        </div>
        <LineBreak className="my-0 h-full w-[1px]" />
        <div className="flex flex-1 flex-col">
          <div className="flex-1">
            <Component />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default AccountEditPage
