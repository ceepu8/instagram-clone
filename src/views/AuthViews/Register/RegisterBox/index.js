import { Button } from '@/components/base'
import { FacebookIcon, InstagramLetterIcon } from '@/components/icons'

import Or from '../../components/Or'
import RegisterForm from '../components/RegisterForm'

const RegisterBox = () => {
  return (
    <div className="w-[350px] flex flex-col items-center justify-center p-10 border border-solid border-chinese-silver">
      <InstagramLetterIcon width={180} height="auto" className="mb-6" />

      <div className="flex flex-col space-y-4 leading-4">
        <p className="text-center font-bold text-nickel">
          Sign up to see photos and videos from your friends.
        </p>
        <Button
          variant="primary"
          size="small"
          fullWidth
          icon={FacebookIcon}
          iconClassName="w-6 h-6"
        >
          Log in with Facebook
        </Button>
        <Or />
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterBox
