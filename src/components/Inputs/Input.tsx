import React from 'react'
import { Alert } from 'antd'
import { useTranslations } from 'next-intl'

import { Error } from '@/types'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: Error
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, label, error, ...props }, ref) => {
  const t = useTranslations('Errors')
  return (
    <div className='flex w-full flex-col gap-2'>
      <div className={cn('h-full w-full', label && 'flex  flex-col gap-2')}>
        <label htmlFor={props.name}>{label}</label>
        <input
          type={type}
          className={cn(
            'border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-full min-h-10 w-full rounded-md border bg-[#f5f5f5] px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
      {error && <Alert type='error' message={t(error.message)} showIcon />}
    </div>
  )
})

Input.displayName = 'Input'
export default Input
