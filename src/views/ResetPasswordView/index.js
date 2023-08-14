import { LockIcon } from 'lucide-react'

import { Link } from '@/components/base'
import { Or } from '@/components/shared'
import { Routes } from '@/constants'

import ResetPasswordForm from './ResetPasswordForm'

const BoxHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="mx-auto flex h-[96px] w-[96px] items-center justify-center rounded-full border-[2px]">
        <LockIcon size={60} strokeWidth="inherit" />
      </div>
      <h2 className="font-bold">Trouble logging in?</h2>
      <p className="text-center text-sm leading-4 text-nickel">
        Enter your email, phone, or username and we&apos;ll send you a link to get back into your
        account.
      </p>
    </div>
  )
}

const ResetPasswordView = () => {
  return (
    <div className="flex min-w-[350px] max-w-[380px] flex-col items-center justify-center border border-solid border-chinese-silver">
      <div className="p-10">
        <BoxHeader />
        <ResetPasswordForm />
        <Or />
        <Link href={Routes.REGISTER}>
          <p className="mt-4 text-center text-sm font-semibold text-black">Create new account</p>
        </Link>
      </div>
      <Link
        href={Routes.LOGIN}
        className="group flex h-[44px] w-full items-center justify-center rounded-none border border-gainsboro bg-lotion"
      >
        <span className="text-sm font-bold text-black group-hover:opacity-50">Back to login</span>
      </Link>
    </div>
  )
}

export default ResetPasswordView
