import { Link } from '@/components/base'
import { cn, getCurrentYear } from '@/utils'

const CopyRight = ({ className }) => {
  const currentYear = getCurrentYear()
  return (
    <span className={cn('text-xs text-note', className)}>
      &copy; {currentYear} Instagram from Meta
    </span>
  )
}

const FeedSidebarFooter = () => {
  const items = [
    {
      label: 'About',
      href: '/',
    },
    {
      label: 'Help',
      href: '/',
    },
    {
      label: 'Press',
      href: '/',
    },
    {
      label: 'API',
      href: '/',
    },
    {
      label: 'Jobs',
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
      label: 'Locations',
      href: '/',
    },
    {
      label: 'Language',
      href: '/',
    },
    {
      label: 'Meta Verified',
      href: '/',
    },
  ]

  const renderItem = ({ label, href }) => (
    <li>
      <Link key={label} href={href} disabled>
        <div className="flex cursor-pointer gap-x-0.5 pt-1 text-xs text-footer transition-all">
          &#x2022;
          <span className="hover:underline">{label}</span>
        </div>
      </Link>
    </li>
  )
  return (
    <div className="mt-4 flex flex-col gap-y-4">
      <ul className="flex flex-wrap gap-x-0.5">{items.map(renderItem)}</ul>
      <CopyRight className="uppercase text-footer" />
    </div>
  )
}

export default FeedSidebarFooter
