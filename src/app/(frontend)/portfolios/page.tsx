import PortfolioList from '@/components/home/portofolios/portfolio-list'
import FilterButton from '@/components/ui/filter-button'
import configPromise from '@payload-config'
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

      <div className="flex justify-center items-center w-full gap-6 my-6">
        <FilterButton name="All" variant="active" />
        {categories.totalDocs > 1 &&
          categories.docs.map((category) => (
            <FilterButton key={category.id} name={category.title} />
          ))}
      </div>

      <PortfolioList />
    </div>
  )
}

export default PortfolioPage
