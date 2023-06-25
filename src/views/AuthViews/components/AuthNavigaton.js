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
    <div className="w-[350px] flex flex-col items-center justify-center p-4 mt-2 border border-solid border-chinese-silver">
      <span className="text-sm">
        {auth[stage].confirm}{' '}
        <Link href={auth[stage].path}>
          <span className="text-primary font-semibold">{auth[stage].label}</span>
        </Link>
      </span>
    </div>
  )
}

export default AuthNavigation
