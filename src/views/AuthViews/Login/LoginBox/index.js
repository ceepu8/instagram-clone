import { Link } from '@/components/base'
import { InstagramLetterIcon } from '@/components/icons'
import { Or } from '@/components/shared'
import { Routes } from '@/constants'
import AppDownloadNavigation from '@/views/AuthViews/components/AppDownloadNavigation'
import AuthNavigation from '@/views/AuthViews/components/AuthNavigaton'
import GoogleLoginButton from '@/views/AuthViews/components/GoogleLoginButton'

import LoginForm from '../components/LoginForm'

const ForgotPasswordButton = () => (
  <Link href={Routes.RESET_PASSWORD}>
    <p className="mt-6 text-center text-xs font-semibold text-black">Forgot password?</p>
  </Link>
)

const LoginBox = () => {
  return (
    <div>
      <div className="flex w-[350px] flex-col items-center justify-center border border-solid border-chinese-silver p-10">
        <InstagramLetterIcon width={180} height="auto" className="mb-8" />
        <LoginForm />
        <Or />
        <GoogleLoginButton variant="ghost" />
        <ForgotPasswordButton />
      </div>

      <AuthNavigation />
      <AppDownloadNavigation />
    </div>
  )
}

export default LoginBox
