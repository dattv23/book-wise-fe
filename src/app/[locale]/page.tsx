import dynamic from 'next/dynamic'
import React from 'react'

const HomePage = dynamic(async () => await import('@/containers/home-page'))

const Home: React.FC = () => {
  return <HomePage />
}

export default Home
