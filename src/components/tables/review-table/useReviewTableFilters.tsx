'use client'

import { useCallback, useMemo } from 'react'
import { useQueryState } from 'nuqs'
import { searchParams } from '@/lib/searchParams'

export function useReviewTableFilters() {
  const [searchQuery, setSearchQuery] = useQueryState(
    'q',
    searchParams.q.withOptions({ shallow: false, throttleMs: 1000 }).withDefault('')
  )

  const [isValid, setIsValid] = useQueryState(
    'isValid',
    searchParams.isValid.withOptions({ shallow: false }).withDefault('')
  )

  const [sentiment, setSentiment] = useQueryState(
    'sentiment',
    searchParams.sentiment.withOptions({ shallow: false }).withDefault('')
  )

  const [page, setPage] = useQueryState('page', searchParams.page.withOptions({ shallow: false }).withDefault(1))

  const resetFilters = useCallback(() => {
    setSearchQuery(null)
    setIsValid(null)
    setSentiment(null)
    setPage(1)
  }, [setSearchQuery, setIsValid, setSentiment, setPage])

  const isAnyFilterActive = useMemo(() => {
    return !!searchQuery || !!isValid || !!sentiment
  }, [searchQuery, isValid, sentiment])

  return {
    searchQuery,
    setSearchQuery,
    isValid,
    setIsValid,
    sentiment,
    setSentiment,
    page,
    setPage,
    resetFilters,
    isAnyFilterActive
  }
}
