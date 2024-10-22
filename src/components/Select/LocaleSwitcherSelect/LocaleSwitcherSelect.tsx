'use client'

import { useParams } from 'next/navigation'
import React, { ChangeEvent, ReactNode, useTransition } from 'react'

import { cn } from '@/lib/utils'
import { DropdownIcon } from '@/components/Icons'
import { usePathname, useRouter } from '@/lib/navigation'

type Props = {
  children: ReactNode
  defaultValue: string
  label: string
}

const LocaleSwitcherSelect: React.FC<Props> = ({ children, defaultValue, label }) => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value
    startTransition(() => {
      // @ts-expect-error -- TypeScript will validate that only known `params`
      router.replace({ pathname, params }, { locale: nextLocale })
    })
  }

  return (
    <label
      className={cn(
        'relative flex items-center gap-2 text-gray-400',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className='sr-only'>{label}</p>
      <select
        className='mr-2 inline-flex cursor-pointer appearance-none rounded-sm bg-transparent py-3 pl-2 pr-6 focus-visible:outline-none'
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={handleSelectChange}
      >
        {children}
      </select>
      <DropdownIcon width={24} height={24} className='absolute right-2 pl-1' />
    </label>
  )
}

export default LocaleSwitcherSelect
