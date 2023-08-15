import { Button, Link } from '@/components/base'
import { ChevronDown } from '@/components/icons'
import { getCurrentYear } from '@/utils'

const CopyRight = () => {
  const currentYear = getCurrentYear()
  return <span className="text-xs text-note">&copy; {currentYear} Instagram from Meta</span>
}

const Footer = () => {
  const items = [
    {
      label: 'Meta',
      href: '/',
    },
    {
      label: 'About',
      href: '/',
    },
    {
      label: 'Jobs',
      href: '/',
    },
    {
      label: 'Helps',
      href: '/',
    },
    {
      label: 'API',
      href: '/',
    },
    {
      label: 'Privacy',
      href: '/',
    },
    {
      label: 'Terms',
      href: '/',
    },
    {
      label: 'Top Accounts',
      href: '/',
    },
    {
      label: 'Locations',
      href: '/',
    },
    {
      label: 'Instagram Lite',
      href: '/',
    },
    {
      label: 'Threads',
      href: '/',
    },
    {
      label: 'Contact Uploading & Non-Users',
      href: '/',
    },
    {
      label: 'Meta Verified',
      href: '/',
    },
  ]

  const renderItem = ({ label, href }) => (
    <Link key={label} href={href} disabled>
      <span className="cursor-pointer text-xs text-note transition-all hover:underline">
        {label}
      </span>
    </Link>
  )

  return (
    <footer className="hidden flex-col items-center justify-center gap-y-4 pt-4 md:flex">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        {items.map(renderItem)}
      </div>
      <div className="flex items-center gap-x-4">
        <Button variant="ghost" bold={false}>
          <div className="flex items-center gap-x-2 text-xs font-medium text-note">
            English <ChevronDown size={16} />
          </div>
        </Button>
        <CopyRight />
      </div>
    </footer>
  )
}

export default Footer
