import { Button } from '@/components/base'
import { FacebookMessengerIcon } from '@/components/icons'

const CardProfilePreview = () => {
  return (
    <div className="flex space-x-2">
      <Button variant="primary" className="h-[32px] flex-1 text-sm" icon={FacebookMessengerIcon}>
        Message
      </Button>
      <Button variant="secondary" className="h-[32px] flex-1 text-sm">
        Following
      </Button>
    </div>
  )
}

export default CardProfilePreview
