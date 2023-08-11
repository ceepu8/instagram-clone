import { Button } from '@/components/base'
import { FacebookMessengerIcon } from '@/components/icons'
import { useDevelopingMessage } from '@/hooks/custom'

const CardProfilePreview = () => {
  const displayMessage = useDevelopingMessage()
  return (
    <div className="flex space-x-2">
      <Button
        variant="primary"
        rootClassName="flex-1 text-sm h-[32px]"
        icon={FacebookMessengerIcon}
        onClick={displayMessage}
      >
        Message
      </Button>
      <Button variant="secondary" rootClassName="flex-1 text-sm h-[32px]" onClick={displayMessage}>
        Following
      </Button>
    </div>
  )
}

export default CardProfilePreview
