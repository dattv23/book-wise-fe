import ReviewForm from '@/components/forms/review-form'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

const ReviewDialog: React.FC = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Viết đánh giá</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Chia sẽ đánh giá của bạn</DialogTitle>
            <DialogDescription>Ý kiến của bạn là một phần đóng góp cho cộng đồng giàu mạnh hơn.</DialogDescription>
          </DialogHeader>
          <ReviewForm />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ReviewDialog
