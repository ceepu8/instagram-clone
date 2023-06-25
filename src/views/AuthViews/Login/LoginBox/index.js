import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { Link } from '@/components/base'
import { GoogleIcon, InstagramLetterIcon } from '@/components/icons'
import AppDownloadNavigation from '@/views/AuthViews/components/AppDownloadNavigation'

import AuthNavigation from '../../components/AuthNavigaton'
import Or from '../../components/Or'
import LoginForm from '../components/LoginForm'

const GoogleLoginButton = () => {
  const router = useRouter()
  const onLogin = () => {
    signIn('google', { redirect: false }).then((callback) => {
      if (callback?.ok && !callback?.error) {
        router.push('/')
      }
    })
  }
  return (
    <button
      className="text-black font-bold text-sm flex items-center gap-x-1 mt-8"
      type="button"
      onClick={onLogin}
    >
      <GoogleIcon width={22} height={22} />
      Log in with Google
    </button>
  )
}

const ForgotPasswordButton = () => (
  <Link href="/">
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
        <GoogleLoginButton />
        <ForgotPasswordButton />
      </div>

      <AuthNavigation />
      <AppDownloadNavigation />
    </div>
  )
}

export default LoginBox
