import { Button } from '@/components/base'
import { InstagramLetterIcon } from '@/components/icons'
import AppDownloadNavigation from '@/views/AuthViews/components/AppDownloadNavigation'

import AuthNavigation from '../../components/AuthNavigaton'
import GoogleLoginButton from '../../components/GoogleLoginButton'
import Or from '../../components/Or'
import LoginForm from '../components/LoginForm'

const ForgotPasswordButton = () => {
  return (
    <Button variant="secondary-text" className="mt-6 text-xs h-fit">
      <p>Forgot password?</p>
    </Button>
  )
}

const LoginBox = () => {
  return (
    <div>
      <div
        className="
        w-[350px] flex flex-col items-center justify-center p-10
        border border-solid border-chinese-silver"
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
