import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/base'
import { FacebookIcon, InstagramLetterIcon } from '@/components/icons'

const Input = ({ placeholder, label, ...props }) => {
  return (
    <div className="relative">
      {/* <label
        className={clsx(`
        absolute top-1/2 -translate-y-1/2 left-2
        text-xs text-nickle
      `)}
      >
        {label}
      </label> */}
      <input placeholder={placeholder} className="text-sm z-10" {...props} />
    </div>
  )
}

const LoginView = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <Image width={480} height={640} src="/phones.png" alt="Phone" />
      </div>
      <div>
        <div
          className={clsx(`
            w-[350px] flex flex-col items-center justify-center p-10
            border border-solid border-chinese-silver
        `)}
        >
          <div className="mb-8">
            <InstagramLetterIcon width={180} height="auto" />
          </div>
          <form className="w-full space-y-2">
            <Input
              placeholder="Phone number, username or email"
              className={clsx(`
                w-full p-2 rounded-sm
                text-xs
                border border-solid border-chinese-silver
                focus:border-philippine-gray placeholder-nickle
            `)}
            />

            <Input
              placeholder="Password"
              className={clsx(`
                w-full p-2 rounded-sm
                text-xs
                border border-solid border-chinese-silver
                bg-lotion
                focus:border-philippine-gray placeholder-nickle
            `)}
              type="password"
            />

            <div>
              <Button size="small" fullWidth type="submit">
                Login
              </Button>
            </div>
          </form>

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

          <div>
            <button
              className={clsx(`
            text-metallic-blue font-bold text-sm
            flex items-center gap-x-1
            mt-8
          `)}
              type="button"
            >
              <FacebookIcon width={22} height={22} />
              Log in with Facebook
            </button>

            <Link href="/">
              <p className="text-metallic-blue text-xs text-center mt-6 font-semibold">
                Forgot password?
              </p>
            </Link>
          </div>
        </div>

        <div
          className={clsx(`
            w-[350px] flex flex-col items-center justify-center p-4 mt-2
            border border-solid border-chinese-silver
        `)}
        >
          <span className="text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/">
              <span className="text-primary font-semibold">Sign up</span>
            </Link>
          </span>
        </div>

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
      </div>
    </div>
  )
}

export default LoginView
