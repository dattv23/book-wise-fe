import FeatureCard from '@/components/cards/feature-card'

const FeaturesSection: React.FC = () => {
  return (
    <div className='mb-16 grid grid-cols-4 gap-8'>
      <FeatureCard icon='🚚' title='Free Shipping' description='For Orders Over $100' />
      <FeatureCard icon='🔄' title='Exchange Offers' description='Book Exchange Policies' />
      <FeatureCard icon='📚' title='My Subscriptions' description='Access Exclusive Books' />
      <FeatureCard icon='💬' title='Help & Support' description='Contact Our Team 24/7' />
    </div>
  )
}

export default FeaturesSection
