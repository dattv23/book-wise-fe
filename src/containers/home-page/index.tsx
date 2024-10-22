import React from 'react'
import dynamic from 'next/dynamic'

import { Product } from '@/types'
import { envServerConfig } from '@/lib/envServer'

const BannerSection = dynamic(() => import('@/containers/home-page/banner-section'))
const FlashSalesSection = dynamic(() => import('@/containers/home-page/flash-sales-section'), { ssr: false })
const CategoriesSection = dynamic(() => import('@/containers/home-page/categories-section'))
const BestSellerSection = dynamic(() => import('@/containers/home-page/best-seller-section'))
const AdsSection = dynamic(() => import('@/containers/home-page/ads-section'))
const OurProductSection = dynamic(() => import('@/containers/home-page/our-product-section'))
const NewArrivalSection = dynamic(() => import('@/containers/home-page/new-arrival-section'))
const ServicesSection = dynamic(() => import('@/containers/home-page/services-section'))

async function getData() {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/api/v1/products`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const HomePage: React.FC = async () => {
  const res = await getData()
  const products: Product[] = res.data

  return (
    <main>
      <BannerSection />
      <FlashSalesSection data={products} />
      <hr />
      <CategoriesSection />
      <hr />
      <BestSellerSection data={products} />
      <AdsSection />
      <OurProductSection data={products} />
      <NewArrivalSection />
      <ServicesSection />
    </main>
  )
}

export default HomePage
