'use client' // Error components must be Client Components

import ErrorPage from '@/containers/shared/error-page'
import { useEffect } from 'react'

export default function Error({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return <ErrorPage />
}
