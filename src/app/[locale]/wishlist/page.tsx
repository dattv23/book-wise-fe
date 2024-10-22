import dynamic from 'next/dynamic'
import React from 'react'

const WishlistPage = dynamic(() => import('@/containers/wishlist-page'))

const Wishlist: React.FC = () => {
  return <WishlistPage />
}

export default Wishlist
