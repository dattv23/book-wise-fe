import FeatureCard from '@/components/cards/feature-card'

const FeaturesSection: React.FC = () => {
  return (
    <div className='mb-16 grid grid-cols-2 gap-8 md:grid-cols-4'>
      <FeatureCard icon='🚚' title='Miễn phí vận chuyển' description={`Đối với đơn hàng trên 1.000.000 đ`} />
      <FeatureCard icon='🔄' title='Ưu đãi đổi trả' description='Chính sách trao đổi sách' />
      <FeatureCard icon='📚' title='Quyền lợi đăng ký' description='Truy cập sách độc quyền' />
      <FeatureCard icon='💬' title='Trợ giúp & Hỗ trợ' description='Liên hệ với nhóm của chúng tôi 24/7' />
    </div>
  )
}

export default FeaturesSection
