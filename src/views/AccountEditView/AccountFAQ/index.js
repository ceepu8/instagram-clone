import { useRouter } from 'next/router'

import { Button, Heading, Link } from '@/components/base'
import { Routes } from '@/constants'
import { cn } from '@/utils'

const AccountFAQItem = ({ href, label, active }) => {
  return (
    <Link href={href} disabled={active || !href}>
      <span
        className={cn(
          'text-sm text-default',
          'block cursor-pointer rounded-lg px-5 py-3 hover:bg-bright-gray',
          active && 'bg-bright-gray hover:bg-gainsboro'
        )}
      >
        {label}
      </span>
    </Link>
  )
}

const AccountFAQ = ({ faqList }) => {
  const router = useRouter()

  const faqListToArray = Object.entries(faqList).map(([key, value]) => {
    return { key, ...value }
  })

  const renderItem = (item) => {
    const active = !router.query.tab ? item.key === 'edit-profile' : item.key === router.query.tab
    const href = `${Routes.ACCOUNT_EDIT}?tab=${item.key}`
    return (
      <li key={item.key}>
        <AccountFAQItem label={item.label} active={active} href={href} />
      </li>
    )
  }

  return (
    <div className="md:px-4">
      <Heading size="xl" className="mb-4 pl-4">
        Settings
      </Heading>
      <ul className="flex flex-col">{faqListToArray.map(renderItem)}</ul>
      <Button variant="link" className="mt-4 pl-4 text-left">
        Switch to professional account
      </Button>
    </div>
  )
}

export default AccountFAQ
