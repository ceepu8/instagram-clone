import { Button } from '@/components/base'
import { FacebookMessengerIcon } from '@/components/icons'

const CardProfilePreview = () => {
  return (
    <div className="flex space-x-2">
      <Button
        variant="primary"
        rootClassName="flex-1 text-sm h-[32px]"
        icon={FacebookMessengerIcon}
      >
        Message
      </Button>
      <Button variant="secondary" rootClassName="flex-1 text-sm h-[32px]">
        Following
      </Button>
    </div>
  )
}

export default CardProfilePreview
