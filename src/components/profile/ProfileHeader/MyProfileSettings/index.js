import { Link } from '@/components/base'
import { cn } from '@/utils'

import MoreSettingsDialog from './MoreSettingsDialog'

const SecondaryLink = ({ href, label }) => {
  return (
    <Link href={href} disabled={!href}>
      <span
        className={cn(
          'inline-flex cursor-pointer select-none appearance-none items-center justify-center gap-x-2 transition-colors duration-150 ease-linear focus:outline-none',
          'h-8 px-4 text-sm font-bold',
          'rounded-lg bg-btn-secondary text-black hover:bg-btn-secondary-hover'
        )}
      >
        {label}
      </span>
    </Link>
  )
}

const MyProfileSettings = () => {
  return (
    <>
      <div className="order-last mt-4 flex basis-full gap-x-2 md:order-2 md:mt-0 md:basis-auto">
        <SecondaryLink href="/accounts/edit" label="Edit profile" />
        <SecondaryLink href="/archive/stories" label="View Archive" />
      </div>
      <MoreSettingsDialog />
    </>
  )
}

export default MyProfileSettings
