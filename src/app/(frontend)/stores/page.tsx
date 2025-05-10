import Contact from '@/components/home/contact'
import StoreList from '@/components/home/store/store-list'
import { Metadata } from 'next/types'
import React from 'react'

export const dynamic = 'force-static'
export const revalidate = 600

const StorePage = async () => {
  return (
    <div className="min-w-screen min-h-screen">
      <h2 className="text-3xl text-primary text-center font-bold p-4 mt-10">
        Our <span className="text-brand">Store</span>
      </h2>

      <StoreList />
      <br />
      <Contact />
    </div>
  )
}

export default StorePage

export function generateMetadata(): Metadata {
  return {
    title: `Stores | Nightcoders`,
  }
}
