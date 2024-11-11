type FeatureCardProps = {
  icon: string
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className='flex flex-col items-center rounded-lg border bg-white p-4 text-center shadow-sm'>
      <span className='mb-2 text-6xl'>{icon}</span>
      <h4 className='e mb-1 text-2xl font-bold capitalize'>{title}</h4>
      <p className='text-sm text-gray-600'>{description}</p>
    </div>
  )
}

export default FeatureCard
