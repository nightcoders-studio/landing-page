'use client'

import { Portfolio } from '@/types/Portfolio'
import ContentCard from '../ui/content-card'
import FilterButton from '@/components/ui/filter-button'
import { useState } from 'react'

type Props = {
  portfolios: Portfolio[]
  limit?: number
}

const ClientPortofolioList = ({ portfolios, limit }: Props) => {
  const [filterCategory, setFilterCategory] = useState<string>('All')

  const parentCategories = [...new Set(portfolios.flatMap((p) => p.categories.map((c) => c.title)))]

  const filtered =
    filterCategory && filterCategory !== 'All'
      ? portfolios.filter((p) => p.categories.some((cat) => cat.title === filterCategory))
      : portfolios

  return (
    <>
      <div className="flex justify-center items-center w-full gap-6 my-6">
        {!limit && (
          <>
            <FilterButton
              name="All"
              variant={filterCategory === 'All' ? 'active' : 'inactive'}
              onClick={() => setFilterCategory('All')}
            />
            {parentCategories.map((category) => (
              <FilterButton
                key={category}
                name={category}
                variant={filterCategory === category ? 'active' : 'inactive'}
                onClick={() => setFilterCategory(category)}
              />
            ))}
          </>
        )}
      </div>
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((portfolio) => (
            <ContentCard
              key={portfolio.slug}
              image={portfolio.heroImage?.url || '/placeholder.svg'}
              title={portfolio.title}
              description={portfolio.aboutThisProject || 'No description available.'}
              slug={`/portfolios/${portfolio.slug}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ClientPortofolioList
