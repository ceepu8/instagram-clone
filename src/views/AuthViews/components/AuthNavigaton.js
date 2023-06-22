import Link from 'next/link'

import { Routes } from '@/constants'

const AuthNavigation = ({ variant = 'login' }) => {
  const auth = {
    login: {
      confirm: "Don't have an account?",
      path: Routes.REGISTER,
      label: 'Sign up',
    },
    register: {
      confirm: 'Have an account?',
      path: Routes.LOGIN,
      label: 'Login',
    },
  }

  return (
    <div className="w-[350px] flex flex-col items-center justify-center p-4 mt-2 border border-solid border-chinese-silver">
      <span className="text-sm">
        {auth[variant].confirm}{' '}
        <Link href={auth[variant].path}>
          <span className="text-primary font-semibold">{auth[variant].label}</span>
        </Link>
      </span>
    </div>
  )
}

export default AuthNavigation
