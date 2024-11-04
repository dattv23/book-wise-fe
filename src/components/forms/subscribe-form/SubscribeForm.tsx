import { Button } from '@/components/ui/button'

const SubscribeForm: React.FC = () => {
  return (
    <div className='text-center'>
      <h3 className='mb-4 text-3xl'>Đăng ký nhận bản tin của chúng tôi để biết tin tức mới nhất về sách!</h3>
      <form className='mx-auto flex h-9 w-80 justify-center rounded-md bg-white'>
        <input
          type='text'
          className='h-full w-60 rounded-md px-4 py-2 text-black outline-none'
          placeholder='Nhập email của bạn'
        />
        <Button type='submit'>Đăng ký</Button>
      </form>
    </div>
  )
}

export default SubscribeForm
