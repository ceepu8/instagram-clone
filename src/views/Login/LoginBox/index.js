import Image from 'next/image'

import { Link } from '@/components/base'
import { FacebookIcon, InstagramLetterIcon } from '@/components/icons'
import { cn } from '@/utils'

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

const SignupNavigation = () => (
  <div
    className={cn(`
            w-[350px] flex flex-col items-center justify-center p-4 mt-2
            border border-solid border-chinese-silver
        `)}
  >
    <span className="text-sm">
      Don&apos;t have an account?
      <Link href="/">
        <span className="text-primary font-semibold">Sign up</span>
      </Link>
    </span>
  </div>
)

const AppDownloadNavigation = (
  <div className="flex flex-col items-center mt-4 space-y-4">
    <p className="text-sm">Get the app.</p>
    <div className="flex gap-x-2">
      <Image width={140} height={80} src="/app-store.png" alt="Download App Store" />
      <Image
        width={140}
        height={80}
        src="/google-play-store.png"
        alt="Download Google Play Store"
      />
    </div>
  </div>
)

const Or = () => (
  <div className="mt-4 w-full">
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-solid border-gainsboro" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-white px-3 text-nickle font-semibold">OR</span>
      </div>
    </div>
  </div>
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

      <SignupNavigation />
      <AppDownloadNavigation />
    </div>
  )
}

export default LoginBox
