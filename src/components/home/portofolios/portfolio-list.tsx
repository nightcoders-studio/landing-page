import { Portfolio } from '@/types/Portfolio'
import ContentCard from '../ui/content-card'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

const PortofolioList = async () => {
  const payload = await getPayload({ config: configPromise })

  const portfolios = await payload.find({
    collection: 'portfolios',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      heroImage: true,
      slug: true,
      content: true,
      categories: true,
      meta: true,
    },
  })
  const docs = portfolios.docs as Portfolio[]

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.totalDocs >= 1 &&
          docs.map((portfolio) => (
            <ContentCard
              key={portfolio.slug}
              image={portfolio.heroImage?.url || '/placeholder.jpg'}
              title={portfolio.title}
              description={portfolio.meta?.description || 'No description available.'}
              slug={`/portfolios/${portfolio.slug}`}
            />
          ))}
      </div>
    </div>
  )
}

export default PortofolioList
