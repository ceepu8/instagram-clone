import { isEmpty } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Fade } from 'react-slideshow-image'

import { Button } from '@/components/base'
import { FacebookIcon, InstagramLetterIcon } from '@/components/icons'
import { cn } from '@/utils'

import Slideshow from './Slideshow'

const Input = ({
  placeholder,
  value,
  id,
  label,
  register,
  required = true,
  isHaveValue,
  ...props
}) => {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={cn(
          `
            text-xs cursor-auto
            absolute top-1/2 -translate-y-1/2 left-2
            transition-all duration-150
      `,
          isHaveValue ? 'top-3 text-[8px]' : ''
        )}
      >
        {label}
      </label>
      <input
        id={id}
        value={value}
        placeholder={placeholder}
        className={cn(
          `
            w-full p-2 rounded-sm
            text-sm
            border border-solid border-chinese-silver
            focus:border-philippine-gray placeholder-nickle
            focus:ring-offset-0
      `,
          isHaveValue ? 'pt-4 pb-1 text-xs' : ''
        )}
        {...register(id, { required })}
        {...props}
      />
    </div>
  )
}

const PhoneScreenSlideShow = () => {
  const fadeImages = [
    {
      url: '/slide-show-1.png',
      caption: 'First Slide',
    },
    {
      url: '/slide-show-2.png',
      caption: 'Second Slide',
    },
    {
      url: '/slide-show-3.png',
      caption: 'Third Slide',
    },
    {
      url: '/slide-show-4.png',
      caption: 'Third Slide',
    },
  ]
  return (
    <Slideshow
      items={fadeImages}
      show={Fade}
      duration={5000}
      arrows={false}
      rootClass="absolute top-6 right-[60px]"
      width={260}
    />
  )
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      name: '',
      password: '',
    },
  })

  const watchName = watch('name', false)
  const watchPassword = watch('password', false)

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <form className="w-full space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="name"
        label="Phone number, username or email"
        register={register}
        isHaveValue={!isEmpty(watchName)}
      />

      <Input
        id="password"
        label="Password"
        type="password"
        register={register}
        isHaveValue={!isEmpty(watchPassword)}
      />

      <div>
        <Button size="small" fullWidth type="submit" disabled={!isValid}>
          Login
        </Button>
      </div>
    </form>
  )
}

const LoginView = () => {
  const renderFacebookLogin = (
    <button
      className="text-metallic-blue font-bold text-sm flex items-center gap-x-1 mt-8"
      type="button"
    >
      <FacebookIcon width={22} height={22} />
      Log in with Facebook
    </button>
  )

  const renderForgotPassword = (
    <Link href="/">
      <p className="text-metallic-blue text-xs text-center mt-6 font-semibold">Forgot password?</p>
    </Link>
  )

  const renderSignupNav = (
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

  const renderAppDownloadNav = (
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

  const Or = (
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

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="hidden md:block relative shrink-0">
        <Image width={480} height={640} src="/phones.png" alt="Phone" />
        <PhoneScreenSlideShow />
      </div>
      <div>
        <div
          className="
            w-[350px] flex flex-col items-center justify-center p-10
            border border-solid border-chinese-silver"
        >
          <InstagramLetterIcon width={180} height="auto" className="mb-8" />
          <LoginForm />
          {Or}
          {renderFacebookLogin}
          {renderForgotPassword}
        </div>

        {renderSignupNav}
        {renderAppDownloadNav}
      </div>
    </div>
  )
}

export default LoginView
