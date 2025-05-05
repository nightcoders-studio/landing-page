import PortfolioList from '@/components/home/portofolios/portfolio-list'
import FilterButton from '@/components/ui/filter-button'
import configPromise from '@payload-config'
import { Metadata } from 'next/types'
import { getPayload } from 'payload'
import React from 'react'

const PortfolioPage = async () => {
  const payload = await getPayload({ config: configPromise })
  const categories = await payload.find({
    collection: 'categories',
  })

  return (
    <div className="min-w-screen min-h-screen">
      <h2 className="text-3xl text-primary text-center font-bold p-4 mt-10">
        Our <span className="text-brand">Work</span> Speaks for Itself
      </h2>

      <PortfolioList />
    </div>
  )
}

export default PortfolioPage

export function generateMetadata(): Metadata {
  return {
    title: `Portofolios | Nightcoders`,
  }
}
