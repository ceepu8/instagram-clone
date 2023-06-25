import { signIn } from 'next-auth/react'

import { Button } from '@/components/base'
import { GoogleIcon } from '@/components/icons'

const GoogleLoginButton = ({ variant = 'secondary' }) => {
  const onLogin = async () => {
    signIn('google', { callbackUrl: '/' })
  }
  return (
    <Button
      variant={variant}
      type="button"
      size="small"
      fullWidth
      onClick={onLogin}
      icon={GoogleIcon}
      rootClassName="mt-6"
    >
      Log in with Google
    </Button>
  )
}

export default GoogleLoginButton
