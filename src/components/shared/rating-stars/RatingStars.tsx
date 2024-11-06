import { Star } from 'lucide-react'

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <span className='flex gap-1'>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </span>
  )
}

export default RatingStars
