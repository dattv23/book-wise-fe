import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const UserFormSkeleton: React.FC = () => {
  return (
    <Card className='mx-auto w-full'>
      <CardHeader>
        <Skeleton className='h-8 w-48' /> {/* Title */}
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <div className='space-y-2'>
            <Skeleton className='h-4 w-24' /> {/* Label */}
            <Skeleton className='h-10 w-full' /> {/* Input */}
          </div>
          <div className='space-y-2'>
            <Skeleton className='h-4 w-24' /> {/* Label */}
            <Skeleton className='h-10 w-full' /> {/* Input */}
          </div>
          <div className='space-y-2'>
            <Skeleton className='h-4 w-24' /> {/* Label */}
            <Skeleton className='h-10 w-full' /> {/* Input */}
          </div>
          <div className='space-y-2'>
            <Skeleton className='h-4 w-24' /> {/* Label */}
            <Skeleton className='h-10 w-full' /> {/* Input */}
          </div>
        </div>
        {/* Submit button */}
        <Skeleton className='h-10 w-full' />
      </CardContent>
    </Card>
  )
}

export default UserFormSkeleton
