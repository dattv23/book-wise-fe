import dynamic from 'next/dynamic'

const HomePage = dynamic(() => import('@/containers/home-page'))

const Home: React.FC = () => {
  return <HomePage />
}

export default Home
