import { signIn } from 'next-auth/react'

import { Button } from '@/components/base'
import { GoogleIcon } from '@/components/icons'
import { Routes } from '@/constants'

const GoogleLoginButton = ({ variant = 'secondary' }) => {
  const onLogin = async () => {
    signIn('google', { callbackUrl: Routes.HOME })
  }
  return (
    <Button
      variant={variant}
      type="button"
      size="small"
      fullWidth
      onClick={onLogin}
      icon={GoogleIcon}
      className="mt-6"
    >
      Log in with Google
    </Button>
  )
}

export default GoogleLoginButton
