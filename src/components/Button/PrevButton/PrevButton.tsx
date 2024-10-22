import { cn } from '@/lib/utils'
import { ArrowLeftIcon } from '@/components/Icons'
import Button, { ButtonProps } from '../Button'

const PrevButton = (props: ButtonProps) => {
  const { className } = props
  return (
    <Button
      {...props}
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-full bg-[#ccc] p-2 hover:bg-secondary disabled:bg-[#ccc] disabled:opacity-10',
        className
      )}
    >
      <ArrowLeftIcon />
    </Button>
  )
}

export default PrevButton
