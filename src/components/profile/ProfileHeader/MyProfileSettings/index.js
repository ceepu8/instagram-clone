import { SettingsIcon } from 'lucide-react'

import { Button } from '@/components/base'

const MyProfileSettings = () => {
  return (
    <>
      <Button
        variant="secondary"
        size="small"
        className="order-last mt-4 w-full md:order-2 md:mt-0 md:w-auto"
      >
        Edit profile
      </Button>
      <Button icon={SettingsIcon} variant="ghost" size="small" className="order-3 md:order-last" />
    </>
  )
}

export default MyProfileSettings
