import { ApiResponse, Category } from '@/@types'
import { Button } from '@/components/ui/button'
import { envServerConfig } from '@/lib/envServer'

async function getCategories() {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/categories`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const CategoryFilterBar = async () => {
  const { data } = (await getCategories()) as ApiResponse<Category[]>

  return (
    <div className='flex max-w-xl flex-wrap items-center justify-center gap-4'>
      {data.map((item) => (
        <Button key={item.id} variant={'outline'}>
          {item.name}
        </Button>
      ))}
    </div>
  )
}

export default CategoryFilterBar
