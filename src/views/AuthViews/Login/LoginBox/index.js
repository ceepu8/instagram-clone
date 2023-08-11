import { Link } from '@/components/base'
import { InstagramLetterIcon } from '@/components/icons'
import { Or } from '@/components/shared'
import { Routes } from '@/constants'
import AppDownloadNavigation from '@/views/AuthViews/components/AppDownloadNavigation'

import AuthNavigation from '../../components/AuthNavigaton'
import GoogleLoginButton from '../../components/GoogleLoginButton'
import LoginForm from '../components/LoginForm'

const ForgotPasswordButton = () => (
  <Link href={Routes.RESET_PASSWORD}>
    <p className="text-black text-xs text-center mt-6 font-semibold">Forgot password?</p>
  </Link>
)

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
