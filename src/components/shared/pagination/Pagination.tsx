const Pagination: React.FC = () => {
  return (
    <div className='mt-8 flex gap-2'>
      <button className='rounded-md border px-4 py-2 hover:bg-gray-50'>Previous</button>
      <button className='rounded-md border bg-purple-600 px-4 py-2 text-white hover:bg-purple-700'>1</button>
      <button className='rounded-md border px-4 py-2 hover:bg-gray-50'>2</button>
      <button className='rounded-md border px-4 py-2 hover:bg-gray-50'>3</button>
      <button className='rounded-md border px-4 py-2 hover:bg-gray-50'>Next</button>
    </div>
  )
}

export default Pagination
