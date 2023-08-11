import { SettingsIcon } from 'lucide-react'

import { Button } from '@/components/base'

const MyProfileSettings = () => {
  return (
    <>
      <Button
        variant="secondary"
        size="small"
        className="order-last md:order-2 mt-4 md:mt-0 w-full md:w-auto"
      >
        Edit profile
      </Button>
      <Button
        icon={SettingsIcon}
        variant="text-secondary"
        size="small"
        className="order-3 md:order-last"
      />
    </>
  )
}

export default MyProfileSettings
