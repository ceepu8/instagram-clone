import { LockIcon } from 'lucide-react'

import { Link } from '@/components/base'
import { Or } from '@/components/shared'
import { Routes } from '@/constants'

import ResetPasswordForm from './ResetPasswordForm'

const BoxHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <div className="w-[96px] h-[96px] mx-auto rounded-full border-[2px] flex items-center justify-center">
        <LockIcon size={60} strokeWidth="inherit" />
      </div>
      <h2 className="font-bold">Trouble logging in?</h2>
      <p className="text-sm text-center text-nickel leading-4">
        Enter your email, phone, or username and we&apos;ll send you a link to get back into your
        account.
      </p>
    </div>
  )
}

const ResetPasswordView = () => {
  return (
    <div className="min-w-[350px] max-w-[380px] flex flex-col items-center justify-center border border-solid border-chinese-silver">
      <div className="p-10">
        <BoxHeader />
        <ResetPasswordForm />
        <Or />
        <Link href={Routes.REGISTER}>
          <p className="text-black text-sm text-center mt-4 font-semibold">Create new account</p>
        </Link>
      </div>
      <Link
        href={Routes.LOGIN}
        className="w-full justify-center items-center flex rounded-none bg-lotion h-[44px] border-gainsboro border group"
      >
        <span className="text-black text-sm font-bold group-hover:opacity-50">Back to login</span>
      </Link>
    </div>
  )
}

export default ResetPasswordView
