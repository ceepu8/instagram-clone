import { Newspaper, ShieldCheck, User2 } from 'lucide-react'

import { Button, Heading } from '@/components/base'
import { MetaIcon } from '@/components/icons'

const AccountsCenterSection = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <MetaIcon />
      <Heading as="h2" size="md">
        Accounts Center
      </Heading>
      <p className="text-xs">
        Manage your connected experiences and account settings across Meta technologies.
      </p>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center space-x-2">
          <User2 size={12} />
          <span className="text-xs leading-3">Personal Details</span>
        </div>
        <div className="flex items-center space-x-2">
          <ShieldCheck size={12} />
          <span className="text-xs leading-3">Password and Security</span>
        </div>
        <div className="flex items-center space-x-2">
          <Newspaper size={12} />
          <span className="text-xs leading-3">Ad Preferences</span>
        </div>
        <Button variant="link" className="text-left">
          See more in Accounts Center
        </Button>
      </div>
    </div>
  )
}

const AccountEditPage = () => {
  return (
    <div className="flex flex-col gap-y-8 px-4 py-4">
      <Heading>Settings</Heading>
      <div className="px-8">
        <div className="border border-divide px-8">
          <div className="grid grid-cols-4">
            <div className="col-span-1 border-r border-divide py-6 pr-8">
              <AccountsCenterSection />
            </div>
            <div className="px-10 py-6">123</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountEditPage
