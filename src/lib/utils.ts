import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const renderStar = (rate: number) => {
  return '⭐⭐⭐⭐⭐✩✩✩✩✩'.slice(5 - rate, 10 - rate)
}
