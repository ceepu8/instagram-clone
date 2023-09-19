import { Newspaper, ShieldCheck, User2 } from 'lucide-react'

import { Button, Heading, Tabs } from '@/components/base'
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
    <div className="flex h-full flex-col px-6 pt-3">
      <Heading>Settings</Heading>
      <div className="mx-auto max-w-[935px] flex-1 border border-divide px-8">
        <div className="grid grid-cols-4">
          <div className="col-span-1 border-r border-divide py-6 pr-8">
            <AccountsCenterSection />
          </div>
          <div className="px-10 py-6">
            <Tabs defaultValue="tab1">
              <Tabs.TabTriggerList className="flex flex-col">
                <Tabs.TabTrigger value="tab1">Tab 1</Tabs.TabTrigger>
                <Tabs.TabTrigger value="tab2">Tab 2</Tabs.TabTrigger>
                <Tabs.TabTrigger value="tab3">Tab 3</Tabs.TabTrigger>
              </Tabs.TabTriggerList>
              <Tabs.TabContent value="tab1">Content for Tab 1</Tabs.TabContent>
              <Tabs.TabContent value="tab2">Content for Tab 2</Tabs.TabContent>
              <Tabs.TabContent value="tab3">Content for Tab 3</Tabs.TabContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountEditPage
