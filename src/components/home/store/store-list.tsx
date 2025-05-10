import { getPayload } from 'payload'
import configPromise from '@payload-config'
import ContentCard from '../ui/content-card'
import { Store } from '@/types/Store'
import ClientStoreList from './ClientStoreList'

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

  const docs = stores.docs as unknown as Store[]

  return <ClientStoreList stores={docs} limit={limit} />
}

export default StoreList
