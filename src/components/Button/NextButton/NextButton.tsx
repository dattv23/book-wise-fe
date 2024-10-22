import { cn } from '@/lib/utils'
import Button, { ButtonProps } from '../Button'
import { ArrowRightIcon } from '@/components/Icons'

const NextButton = (props: ButtonProps) => {
  const { className } = props
  return (
    <Button
      {...props}
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-full bg-[#ccc] p-2 hover:bg-secondary disabled:bg-[#ccc] disabled:opacity-10',
        className
      )}
    >
      <ArrowRightIcon />
    </Button>
  )
}

export default NextButton
