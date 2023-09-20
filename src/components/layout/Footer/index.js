import { useTranslation } from 'react-i18next'

import { Link } from '@/components/base'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '@/components/base/Select'
import { useChangeLanguage } from '@/hooks/custom'
import { getCurrentYear } from '@/utils'

const CopyRight = () => {
  const currentYear = getCurrentYear()
  return <span className="text-xs text-note">&copy; {currentYear} Instagram from Meta</span>
}

const LanguagesSelect = () => {
  const { t } = useTranslation()
  const { onChangeLanguage, currentLocale } = useChangeLanguage()

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

  const trigger = (
    <SelectTrigger className="text-comment" hasShadow={false}>
      {currentLocale}
    </SelectTrigger>
  )

  const renderItem = ({ label, value }) => (
    <SelectItem key={value} value={value} hasCheckIcon>
      {label}
    </SelectItem>
  )

  return (
    <div className="flex items-center gap-x-2">
      <Select
        trigger={trigger}
        value={currentLocale}
        onValueChange={(e) => {
          onChangeLanguage(e)
        }}
      >
        <SelectContent>
          <SelectGroup>{languages.map(renderItem)}</SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
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
    <footer className="hidden h-[var(--footer-height)] flex-col items-center justify-center gap-y-2 md:flex">
      <div className="flex flex-wrap items-center justify-center gap-y-2 space-x-4">
        {items.map(renderItem)}
      </div>
      <div className="flex items-center gap-x-4">
        <LanguagesSelect />
        <CopyRight />
      </div>
    </footer>
  )
}

export default Footer
