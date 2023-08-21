import { Button } from '@/components/base'
import { FacebookMessengerIcon } from '@/components/icons'

const CardProfilePreview = () => {
  return (
    <div className="flex space-x-2">
      <Button size="small" variant="primary">
        <FacebookMessengerIcon />
        Message
      </Button>
      <Button size="small" variant="secondary">
        Following
      </Button>
    </div>
  )
}

export default CardProfilePreview
