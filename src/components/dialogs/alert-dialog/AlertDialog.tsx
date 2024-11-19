import {
  AlertDialog as AlertDialogShadcn,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'

type AlertDialogProps = {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  loading: boolean
  children?: React.ReactNode
  title?: string
  description?: string
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  isOpen,
  title,
  description,
  onClose,
  onConfirm,
  loading,
  children
}) => {
  return (
    <AlertDialogShadcn open={isOpen}>
      {children && <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title ?? 'Bạn có chắc chắn thực hiện điều này?'}</AlertDialogTitle>
          <AlertDialogDescription>{description ?? 'Không thể hoàn tác hành động này.'}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading} onClick={onClose}>
            Hủy bỏ
          </AlertDialogCancel>
          <AlertDialogAction disabled={loading} onClick={onConfirm}>
            Tiếp tục
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogShadcn>
  )
}

export default AlertDialog
