import { InstagramLetterIcon } from '@/components/icons'
import { Or } from '@/components/shared'

import GoogleLoginButton from '../../components/GoogleLoginButton'
import RegisterForm from '../components/RegisterForm'

const RegisterBox = () => {
  return (
    <div className="w-[350px] flex flex-col items-center justify-center p-10 border border-solid border-chinese-silver">
      <InstagramLetterIcon width={180} height="auto" className="mb-6" />

      <div className="flex flex-col space-y-4">
        <p className="text-center font-bold text-nickel leading-4">
          Sign up to see photos and videos from your friends.
        </p>
        <GoogleLoginButton />
        <Or />
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterBox
