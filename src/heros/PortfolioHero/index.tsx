import Image from 'next/image'
import { Portfolio } from '@/types/Portfolio'

const PortfolioHero = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <>
      <div className="rounded-2xl">
        <Image
          src={portfolio.heroImage.url}
          alt={`${portfolio.title} image`}
          width={1200}
          height={600}
          sizes="100vw"
          className="w-full h-full object-cover rounded-lg"
          priority
        />
      </div>
      <div className="flex justify-between my-4">
        <div className="flex mr-6">
          {portfolio.categories.map((category, index) => {
            const isLast = index === portfolio.categories.length - 1
            return (
              <p key={category.id} className="text-md text-brand">
                {category.title}
                {!isLast && <span className="mx-3">|</span>}
              </p>
            )
          })}
        </div>
        <div className="text-md text-brand">Year</div>
      </div>
      <div className="flex justify-between my-4">
        <h1 className="text-3xl text-primary font-bold">{portfolio.title}</h1>
        <div className="text-3xl text-primary">{portfolio.year}</div>
      </div>
    </>
  )
}

export default PortfolioHero
