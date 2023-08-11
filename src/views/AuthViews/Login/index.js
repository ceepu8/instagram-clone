import LoginBanner from './LoginBanner'
import LoginBox from './LoginBox'

const LoginView = () => {
  return (
    <div className="max-h-screen h-full flex items-center justify-center">
      <LoginBanner />
      <LoginBox />
    </div>
  )
}

export default LoginView
