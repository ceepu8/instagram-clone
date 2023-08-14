import dayjs from 'dayjs'

import { Button, Link } from '@/components/base'
import { ChevronDown } from '@/components/icons'

const Footer = () => {
  const items = [
    {
      key: 'meta',
      label: 'Meta',
      href: '/',
    },
    {
      key: 'about',
      label: 'About',
      href: '/',
    },
    {
      key: 'jobs',
      label: 'Jobs',
      href: '/',
    },
    {
      key: 'helps',
      label: 'Helps',
      href: '/',
    },
    {
      key: 'api',
      label: 'API',
      href: '/',
    },
    {
      key: 'privacy',
      label: 'Privacy',
      href: '/',
    },
    {
      key: 'terms',
      label: 'Terms',
      href: '/',
    },
    {
      key: 'top-accounts',
      label: 'Top Accounts',
      href: '/',
    },
    {
      key: 'locations',
      label: 'Locations',
      href: '/',
    },
    {
      key: 'instagram-lite',
      label: 'Instagram Lite',
      href: '/',
    },
    {
      key: 'threads',
      label: 'Threads',
      href: '/',
    },
    {
      key: 'contact-uploading-non-users',
      label: 'Contact Uploading & Non-Users',
      href: '/',
    },
    {
      key: 'meta-verified',
      label: 'Meta Verified',
      href: '/',
    },
  ]

  const generateFooterItems = () => {
    return items.map(({ label, href, key }) => (
      <Link key={key} href={href} disabled>
        <span className="cursor-pointer text-xs text-note hover:underline">{label}</span>
      </Link>
    ))
  }

  const getCurrentYear = () => {
    return dayjs().year()
  }

  return (
    <div className="hidden flex-col items-center justify-center gap-y-4 pt-4 md:flex">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        {generateFooterItems()}
      </div>
      <div className="flex items-center gap-x-4">
        <Button variant="ghost" className="!text-xs font-medium text-note" bold={false}>
          English
          <ChevronDown size={16} />
        </Button>
        <span className="text-xs text-note">&copy; {getCurrentYear()} Instagram from Meta</span>
      </div>
    </div>
  )
}

export default Footer
