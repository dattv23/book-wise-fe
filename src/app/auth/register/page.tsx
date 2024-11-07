import dynamic from 'next/dynamic'

const RegisterPage = dynamic(() => import('@/containers/register-page'))

const Register: React.FC = () => {
  return <RegisterPage />
}

export default Register
