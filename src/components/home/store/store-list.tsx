import { getPayload } from 'payload'
import configPromise from '@payload-config'
import ContentCard from '../ui/content-card'
import { Store } from '@/types/Store'

interface StoreListProps {
  slug?: string
}

const StoreList = async ({ slug }: StoreListProps) => {
  const payload = await getPayload({ config: configPromise })
  const limit = slug === '/' ? 6 : undefined

  const stores = await payload.find({
    collection: 'stores',
    depth: 1,
    limit,
    overrideAccess: false,
    select: {
      title: true,
      heroImage: true,
      slug: true,
      categories: true,
      priceWithCurrency: true,
      aboutThisProject: true,
    },
  })

  const docs = stores.docs as Store[]

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.totalDocs >= 1 &&
          docs.map((store) => (
            <ContentCard
              key={store.slug}
              image={store.heroImage?.url || '/placeholder.jpg'}
              title={store.title}
              description={store.aboutThisProject || 'No description available.'}
              slug={`/stores/${store.slug}`}
              purchase={true}
              price={store.priceWithCurrency}
            />
          ))}
      </div>
    </div>
  )
}

export default StoreList
