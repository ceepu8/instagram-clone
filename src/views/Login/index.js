import LoginBanner from './LoginBanner'
import LoginBox from './LoginBox'

const LoginView = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoginBanner />
      <LoginBox />
    </div>
  )
}

export default LoginView
