const ProductGridSkeleton: React.FC = () => {
  return (
    <div className='m-2 grid animate-pulse grid-cols-2 gap-2 sm:m-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4'>
      <div className='h-72 rounded-md bg-gray-200'></div>
      <div className='h-72 rounded-md bg-gray-200'></div>
      <div className='h-72 rounded-md bg-gray-200'></div>
      <div className='h-72 rounded-md bg-gray-200'></div>
    </div>
  )
}

export default ProductGridSkeleton
