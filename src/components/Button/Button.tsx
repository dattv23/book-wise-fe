import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva('inline-flex items-center justify-center rounded text-base font-medium hover:opacity-80', {
  variants: {
    variant: {
      primary: 'bg-[#DB4444] text-white',
      secondary: 'bg-white border border-[#cccc] text-black'
    },
    size: {
      default: 'px-12 py-4',
      sm: 'px-12 py-3'
    },
    state: {
      default: 'opacity-100',
      disabled: 'opacity-15'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
    state: 'default'
  }
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({ variant, size, className, children, ...props }) => {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {children}
    </button>
  )
}

export default Button
