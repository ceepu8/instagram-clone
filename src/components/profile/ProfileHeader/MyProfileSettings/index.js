import { Button } from '@/components/base'
import { SettingsIcon } from '@/components/icons'

const MyProfileSettings = () => {
  return (
    <>
      <div className="order-last mt-4 flex basis-full gap-x-2 md:order-2 md:mt-0 md:basis-auto">
        <Button variant="secondary" size="small">
          Edit profile
        </Button>
        <Button variant="secondary" size="small">
          View Archive
        </Button>
      </div>
      <Button icon={SettingsIcon} variant="ghost" className="order-3 md:order-last" />
    </>
  )
}

export default MyProfileSettings
