import Link from 'next/link'

import { Routes } from '@/constants'

const AuthNavigation = ({ stage = 'login' }) => {
  const auth = {
    login: {
      confirm: "Don't have an account?",
      path: Routes.REGISTER,
      label: 'Sign up',
    },
    register: {
      confirm: 'Have an account?',
      path: Routes.HOME,
      label: 'Login',
    },
  }

  return (
    <div className="mt-2 flex w-[350px] flex-col items-center justify-center border border-solid border-chinese-silver p-4">
      <span className="text-sm">
        {auth[stage].confirm}{' '}
        <Link href={auth[stage].path}>
          <span className="link font-semibold">{auth[stage].label}</span>
        </Link>
      </span>
    </div>
  )
}

export default AuthNavigation
