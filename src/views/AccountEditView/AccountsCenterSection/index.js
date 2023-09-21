import { Newspaper, ShieldCheck, User2 } from 'lucide-react'

import { Button, Heading } from '@/components/base'
import { MetaIcon } from '@/components/icons'

const AccountListItem = ({ icon, label }) => {
  return (
    <li className="flex items-center space-x-2">
      {icon}
      <span className="text-xs leading-3">{label}</span>
    </li>
  )
}

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
        <AccountListItem icon={<User2 size={18} />} label="Personal Details" />
        <AccountListItem icon={<ShieldCheck size={18} />} label="Password and Security" />
        <AccountListItem icon={<Newspaper size={18} />} label="Ad Preferences" />
        <Button variant="link" className="text-left">
          See more in Accounts Center
        </Button>
      </ul>
    </div>
  )
}

export default AccountsCenterSection
