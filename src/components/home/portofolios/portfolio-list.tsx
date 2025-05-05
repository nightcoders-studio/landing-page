import { Portfolio } from '@/types/Portfolio'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import ClientPortofolioList from './ClientPortofolioList'

const PortofolioList = async ({ slug }: { slug?: string }) => {
  const payload = await getPayload({ config: configPromise })
  const limit = slug === '/' || slug === '' ? 6 : undefined

  const portfolios = await payload.find({
    collection: 'portfolios',
    depth: 1,
    limit,
    overrideAccess: false,
    select: {
      title: true,
      heroImage: true,
      slug: true,
      categories: true,
      aboutThisProject: true,
    },
  })

  const docs = portfolios.docs as unknown as Portfolio[]
  return <ClientPortofolioList portfolios={docs} limit={limit} />
}

export default PortofolioList
