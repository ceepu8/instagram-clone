import { Link } from '@/components/base'
import { FacebookIcon, InstagramLetterIcon } from '@/components/icons'
import { cn } from '@/utils'
import AppDownloadNavigation from '@/views/AuthViews/components/AppDownloadNavigation'

import AuthNavigation from '../../components/AuthNavigaton'
import Or from '../../components/Or'
import LoginForm from '../components/LoginForm'

const FacebookLoginButton = () => (
  <button
    className="text-metallic-blue font-bold text-sm flex items-center gap-x-1 mt-8"
    type="button"
  >
    <FacebookIcon width={22} height={22} />
    Log in with Facebook
  </button>
)

const ForgotPasswordButton = () => (
  <Link href="/">
    <p className="text-metallic-blue text-xs text-center mt-6 font-semibold">Forgot password?</p>
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
        <FacebookLoginButton />
        <ForgotPasswordButton />
      </div>

      <AuthNavigation />
      <AppDownloadNavigation />
    </div>
  )
}

export default LoginBox
