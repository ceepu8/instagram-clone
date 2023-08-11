import { SettingsIcon } from 'lucide-react'

import { Button } from '@/components/base'
import { useDevelopingMessage } from '@/hooks/custom'

const MyProfileSettings = () => {
  const displayMessage = useDevelopingMessage()
  return (
    <>
      <Button
        variant="secondary"
        size="small"
        rootClassName="order-last md:order-2 mt-4 md:mt-0 w-full md:w-auto"
        onClick={displayMessage}
      >
        Edit profile
      </Button>
      <Button
        icon={SettingsIcon}
        variant="text-secondary"
        size="small"
        rootClassName="order-3 md:order-last"
        onClick={displayMessage}
      />
    </>
  )
}

export default MyProfileSettings
