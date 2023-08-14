import LoginBanner from './LoginBanner'
import LoginBox from './LoginBox'

const LoginView = () => {
  return (
    <div className="flex h-full max-h-screen items-center justify-center">
      <LoginBanner />
      <LoginBox />
    </div>
  )
}

export default LoginView
