'use client'

import { searchParams } from '@/lib/searchParams'
import { useQueryState } from 'nuqs'
import { useCallback, useMemo } from 'react'

export function useOrderTableFilters() {
  const [searchQuery, setSearchQuery] = useQueryState(
    'q',
    searchParams.q.withOptions({ shallow: false, throttleMs: 1000 }).withDefault('')
  )
  const [page, setPage] = useQueryState('page', searchParams.page.withDefault(1))

  const [categoriesFilter, setCategoriesFilter] = useQueryState(
    'categories',
    searchParams.categories.withOptions({ shallow: false }).withDefault('')
  )

  const resetFilters = useCallback(() => {
    setSearchQuery(null)
    setCategoriesFilter(null)

    setPage(1)
  }, [setSearchQuery, setCategoriesFilter, setPage])

  const isAnyFilterActive = useMemo(() => {
    return !!searchQuery || !!categoriesFilter
  }, [searchQuery, categoriesFilter])

  return {
    searchQuery,
    setSearchQuery,
    categoriesFilter,
    setCategoriesFilter,
    page,
    setPage,
    resetFilters,
    isAnyFilterActive
  }
}
