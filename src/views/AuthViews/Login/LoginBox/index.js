import { Button } from '@/components/base'
import { InstagramLetterIcon } from '@/components/icons'
import AppDownloadNavigation from '@/views/AuthViews/components/AppDownloadNavigation'

import AuthNavigation from '../../components/AuthNavigaton'
import GoogleLoginButton from '../../components/GoogleLoginButton'
import Or from '../../components/Or'
import LoginForm from '../components/LoginForm'

const ForgotPasswordButton = () => {
  return (
    <Button variant="text-secondary" className="mt-6 h-fit text-xs">
      <p>Forgot password?</p>
    </Button>
  )
}

const LoginBox = () => {
  return (
    <div>
      <div
        className="
        flex w-[350px] flex-col items-center justify-center border
        border-solid border-chinese-silver p-10"
      >
        <InstagramLetterIcon width={180} height="auto" className="mb-8" />
        <LoginForm />
        <Or />
        <GoogleLoginButton variant="text-secondary" />
        <ForgotPasswordButton />
      </div>

      <AuthNavigation />
      <AppDownloadNavigation />
    </div>
  )
}

export default LoginBox
