import dynamic from 'next/dynamic'

const LoginPage = dynamic(() => import('@/containers/login-page'))

const Login: React.FC = () => {
  return <LoginPage />
}

export default Login
