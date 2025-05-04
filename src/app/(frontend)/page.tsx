import { generateMetadata } from './[slug]/page'
import Header from '../../components/home/hero'
import MitraCard from '../../components/home/ui/mitra-card'
import PortfolioList from '../../components/home/portofolios/portfolio-list'
import ServiceList from '../../components/home/services/service-list'
import StoreList from '../../components/home/store/store-list'
import Contact from '@/components/home/contact'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="min-h-screen text-primary md:p-4 xl:p-10 px-4 max-w-[1200px] mx-auto">
      <Header />

      <h2 id="services" className="text-3xl text-primary text-center font-bold p-4 mt-10">
        Our Best <span className="text-brand">Service</span>
      </h2>
      <ServiceList />

      <h2 className="text-3xl text-primary text-center font-bold p-4 mt-10">
        Our <span className="text-brand">Work</span> Speaks for Itself
      </h2>
      <PortfolioList slug="/" />
      <div className="flex justify-center">
        <Link
          href="/portfolios"
          className="px-6 py-3 text-brand border border-brand rounded-3xl hover:bg-brand hover:text-white my-4 transition"
        >
          See more
        </Link>
      </div>

      <h2 className="text-3xl text-primary text-center font-bold p-4 mt-10">
        Our <span className="text-brand">Store</span>
      </h2>
      <StoreList slug="/" />
      <div className="flex justify-center">
        <Link
          href="/stores"
          className="px-6 py-3 text-brand border border-brand rounded-3xl hover:bg-brand hover:text-white my-4 transition"
        >
          See more
        </Link>
      </div>

      <h2 className="text-3xl text-primary text-center font-bold p-4 mt-10">
        Who are our <span className="text-brand">Client?</span>
      </h2>
      <div className="flex gap-6 flex-nowrap w-full justify-between">
        <MitraCard image={'/mugee.png'} />
        <MitraCard image={'/ministry_of_finance.png'} />
        <MitraCard image={'/polda.png'} />
        <MitraCard image={'/tou.png'} />
        <MitraCard image={'/kasyapi.png'} />
      </div>

      <Contact />
    </div>
  )
}

export default Home

export { generateMetadata }
