import { useTranslation } from 'react-i18next'

import { Link } from '@/components/base'
import { ChevronDown } from '@/components/icons'
import { useChangeLanguage } from '@/hooks/custom'
import { getCurrentYear } from '@/utils'

const CopyRight = () => {
  const currentYear = getCurrentYear()
  return <span className="text-xs text-note">&copy; {currentYear} Instagram from Meta</span>
}

const Footer = () => {
  const { t } = useTranslation()

  const { onChangeLanguage, currentLocale } = useChangeLanguage()
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

  const languages = [
    {
      label: t('languages.english'),
      value: 'en',
    },
    {
      label: t('languages.vietnam'),
      value: 'vi',
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
        <div className="flex items-center gap-x-2">
          <select
            value={currentLocale}
            className="border-none p-0 text-xs text-comment"
            onChange={(e) => onChangeLanguage(e.target.value)}
          >
            {languages.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <ChevronDown size={16} className="text-comment" />
        </div>

        <CopyRight />
      </div>
    </footer>
  )
}

export default Footer
