import React from 'react'

import Navbar from './Navbar'
import TopHeader from './TopHeader'

const Header: React.FC = () => {
  return (
    <header>
      <TopHeader />
      <Navbar />
    </header>
  )
}

export default Header
