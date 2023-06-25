import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/base'
import { GoogleIcon } from '@/components/icons'

const GoogleLoginButton = ({ variant = 'secondary' }) => {
  const router = useRouter()
  const onLogin = () => {
    signIn('google', { redirect: false }).then((callback) => {
      if (callback?.ok && !callback?.error) {
        router.replace('/')
      }
    })
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
