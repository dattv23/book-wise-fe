import { passwordRegex } from '@/lib/regex'
import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email là bắt buộc!' })
    .min(1, 'Email là bắt buộc!')
    .email('Email không đúng định dạng!'),
  password: z.string({ required_error: 'Mật khẩu là bắt buộc' }).min(1, 'Mật khẩu là bắt buộc!')
  // .regex(passwordRegex, 'Mật khẩu phải có độ dài lớn 8 bao gồm chữ in hoa, số và kí tự đặc biệt!')
})

export const registerSchema = z.object({
  name: z
    .string({ required_error: 'Họ và tên là bắt buộc!' })
    .min(1, 'Họ và tên là bắt buộc!')
    .regex(/^[^\d]*$/, 'Họ và tên không được chứa chữ số!'),
  email: z
    .string({ required_error: 'Email là bắt buộc!' })
    .min(1, 'Email là bắt buộc!')
    .email('Email không đúng định dạng!'),
  password: z
    .string({ required_error: 'Mật khẩu là bắt buộc' })
    .min(1, 'Mật khẩu là bắt buộc!')
    .regex(passwordRegex, 'Mật khẩu phải có độ dài lớn 8 bao gồm chữ in hoa, số và kí tự đặc biệt!')
})
