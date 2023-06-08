import { Button } from '@/components/base'
import { FacebookMessengerIcon } from '@/components/icons'
import React from 'react'

const ProfilePreview = () => {
  return (
    <div>
      <Button variant="primary" icon={FacebookMessengerIcon} fullWidth>
        Message
      </Button>
      <Button variant="secondary">Following</Button>
    </div>
  )
}

export default ProfilePreview
