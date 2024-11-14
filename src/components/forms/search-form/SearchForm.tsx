import { ApiResponse, Product } from '@/@types'
import { envServerConfig } from '@/lib/envServer'
import { SearchIcon } from 'lucide-react'
import { notFound, redirect } from 'next/navigation'
import React from 'react'

const SearchForm = () => {
  const search = async (formData: FormData) => {
    'use server'
    const value = formData.get('searchValue')?.toString()
    if (!value) return
    const res = await fetch(`${envServerConfig.DOMAIN_API}/books?title=${value}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    const {
      data: { books }
    } = (await res.json()) as ApiResponse<{ books: Product[] }>
    if (books.length === 0) {
      return notFound()
    }
    redirect(`/products/${books[0].bookId}`)
  }

  return (
    <form action={search}>
      <input
        type='text'
        name='searchValue'
        placeholder='Tìm kiếm sách...'
        className='w-full rounded-lg border px-4 py-3'
      />
      <button
        type='submit'
        aria-label='search-button'
        className='absolute right-6 top-1/2 -translate-y-1/2 rounded-lg bg-purple-600 p-2'
      >
        <SearchIcon className='text-white' size={20} />
      </button>
    </form>
  )
}

export default SearchForm
