import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='hidden gap-2 md:flex'>
      <Image src={'/images/logo-icon.png'} alt='logo-icon' width={48} height={48} sizes='48' />
      <div>
        <p className='text-2xl'>BookWise</p>
        <div className='h-1 w-full bg-secondary' />
        <p className='text-center text-[0.5rem] font-bold uppercase'>Reading Club</p>
      </div>
    </Link>
  )
}

export default Logo
